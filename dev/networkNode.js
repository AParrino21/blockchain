const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Blockchain = require('./blockchain')
const { v4: uuidv4 } = require('uuid');
const PORT = process.argv[2]
const rp = require('request-promise')

const nodeAddress = uuidv4().split('-').join('')

const geppettoCoin = new Blockchain()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/blockchain', (req, res) => {
    res.send(geppettoCoin)
})

app.post('/transaction', (req, res) => {
    const newTransaction = req.body
    const blockIndex = geppettoCoin.addTransactionToPendingTransactions(newTransaction)
    res.json({ note: `Transaction will be added in block ${blockIndex}` })
})

app.post('/transaction/broadcast', (req, res) => {
    const newTransaction = geppettoCoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    geppettoCoin.addTransactionToPendingTransactions(newTransaction);

    const requestPromises = [];
    geppettoCoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/transaction',
            method: 'POST',
            body: newTransaction,
            json: true
        };

        requestPromises.push(rp(requestOptions));
    });

    Promise.all(requestPromises)
        .then(data => {
            res.json({ note: 'Transaction created and broadcast successfully.' });
        });
})

app.get('/mine', (req, res) => {
    const lastBlock = geppettoCoin.getLastBlock()
    const previousBlockHash = lastBlock['hash']
    const currentBlockData = {
        transactions: geppettoCoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }
    const nonce = geppettoCoin.proofOfWork(previousBlockHash, currentBlockData)
    const blockHash = geppettoCoin.hashBlock(previousBlockHash, currentBlockData, nonce)

    const newBlock = geppettoCoin.createNewBlock(nonce, previousBlockHash, blockHash)

    const requestPromises = []
    geppettoCoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/receive-new-block',
            method: 'POST',
            body: { newBlock: newBlock },
            json: true
        }

        requestPromises.push(rp(requestOptions))
    })

    Promise.all(requestPromises)
        .then(data => {
            const requestOptions = {
                uri: geppettoCoin.currentNodeUrl + '/transaction/broadcast',
                method: 'Post',
                body: {
                    amount: 12.5,
                    sender: "00",
                    recipient: nodeAddress
                },
                json: true
            }

            return rp(requestOptions)
        })
        .then(data => {
            res.json({
                note: "New block mined and broadcasted successfully",
                block: newBlock
            })
        })
})

app.post('/receive-new-block', (req, res) => {
    const newBlock = req.body.newBlock
    const lastBlock = geppettoCoin.getLastBlock()
    const correctHash = lastBlock.hash === newBlock.previousBlockHash
    const correctIndex = lastBlock['index'] + 1 === newBlock['index']

    if (correctHash && correctIndex) {
        geppettoCoin.chain.push(newBlock)
        geppettoCoin.pendingTransactions = []
        res.json({
            note: "New block reveiced and accepted",
            newBlock: newBlock
        })
    } else {
        res.json({
            note: "New block rejected",
            newBlock: newBlock
        })
    }
})

// will register a node and broadcast that node to the whole network
app.post('/register-and-broadcast-node', function (req, res) {
    const newNodeUrl = req.body.newNodeUrl;
    if (geppettoCoin.networkNodes.indexOf(newNodeUrl) == -1) geppettoCoin.networkNodes.push(newNodeUrl);

    const regNodesPromises = [];
    geppettoCoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/register-node',
            method: 'POST',
            body: { newNodeUrl: newNodeUrl },
            json: true
        };

        regNodesPromises.push(rp(requestOptions));
    });

    Promise.all(regNodesPromises)
        .then(data => {
            const bulkRegisterOptions = {
                uri: newNodeUrl + '/register-nodes-bulk',
                method: 'POST',
                body: { allNetworkNodes: [...geppettoCoin.networkNodes, geppettoCoin.currentNodeUrl] },
                json: true
            };

            return rp(bulkRegisterOptions);
        })
        .then(data => {
            res.json({ note: 'New node registered with network successfully.' });
        });
});

// will register a node with the network
app.post('/register-node', (req, res) => {
    const newNodeUrl = req.body.newNodeUrl
    const nodeNotAlreadyPresent = geppettoCoin.networkNodes.indexOf(newNodeUrl) == -1
    const notCurrentNode = geppettoCoin.currentNodeUrl !== newNodeUrl

    if (nodeNotAlreadyPresent && notCurrentNode) geppettoCoin.networkNodes.push(newNodeUrl)

    res.json({ note: "New node registered successfully" })
})

// register multiple nodes at once
app.post('/register-nodes-bulk', (req, res) => {
    const allNetworkNodes = req.body.allNetworkNodes

    allNetworkNodes.forEach(networkNodeUrl => {
        const notNotAlreadyPresent = geppettoCoin.networkNodes.indexOf(networkNodeUrl) == -1
        const notCurrentNode = geppettoCoin.currentNodeUrl !== networkNodeUrl
        if (notNotAlreadyPresent && notCurrentNode) geppettoCoin.networkNodes.push(networkNodeUrl)
    })

    res.json({ note: "Bulk registration successful" })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})