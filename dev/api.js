const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Blockchain = require('./blockchain')
const { v4: uuidv4 } = require('uuid');

const nodeAddress = uuidv4().split('-').join('')

const geppettoCoin = new Blockchain()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/blockchain', (req, res) => {
    res.send(geppettoCoin)
})

app.post('/transaction', (req, res) => {
    const blockIndex = geppettoCoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({ note: `Transaction will be added in block ${blockIndex}.` })
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

    geppettoCoin.createNewTransaction(12.5, "00", nodeAddress)

    const newBlock = geppettoCoin.createNewBlock(nonce, previousBlockHash, blockHash)

    res.json({
        note: "New block mined successfully",
        block: newBlock
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})