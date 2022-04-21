const Blockchain = require('./blockchain')

const bitcoin = new Blockchain()

// bitcoin.createNewBlock(2389, 'AFJASDKFLJAS', 'ADLFKJ34R0')
// bitcoin.createNewBlock(111, 'JASDFADFS', 'FDGFGHSFGSDF')
// bitcoin.createNewBlock(233239, 'FDFFEADFV', 'ASDFAW4E454EGF')

// bitcoin.createNewTransaction(100, 'ALEXdf8a9df9f980', 'JENNdfadf8adf9g9809')

// bitcoin.createNewBlock(2481958190, 'dfjaklsdfjalsdf', 'asdfjaklsdjfakls')

// bitcoin.createNewTransaction(50, 'ALEXdf8a9df9f980', 'JENNdfadf8adf9g9809')
// bitcoin.createNewTransaction(300, 'ALEXdf8a9df9f980', 'JENNdfadf8adf9g9809')
// bitcoin.createNewTransaction(2000, 'ALEXdf8a9df9f980', 'JENNdfadf8adf9g9809')

// bitcoin.createNewBlock(12344, 'akdfjaJAS', 'llppfkadjfJ34R0')

// console.log(bitcoin);
// console.log(bitcoin.chain[2]);

// const previousBlockHash = 'adfjalskdjfalskdfjasdfasdf'
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: 'adklfjaklsdfja',
//         recipient: 'adfjalksdfjalk;dfasdfasdfaad'
//     },
//     {
//         amount: 30,
//         sender: 'fdfadsfasdfaklsdfja',
//         recipient: 'adsf4rfw4rfa4ffaad'
//     },
//     {
//         amount: 200,
//         sender: 'djfapdfphjfpoadhjfpaoshdfpoasd',
//         recipient: 'deunfnuadhfikdjfhkajhfaa'
//     }
// ]
// const nonce = 100

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 12461))

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData))

// console.log(bitcoin);

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1650511060248,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1650511090596,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1650511192999,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "57019e752db147938f044ebc3cf5aa63",
                    "transactionId": "ef5ca009e5674f9cb06ad6aafaf5330b"
                },
                {
                    "amount": 10,
                    "sender": "DGASDGFasdfasdfADFJKDLFK",
                    "recipient": "asdfasdfDSADFADFASDFASDF",
                    "transactionId": "230c296a96e943a391354e6d3b95672d"
                },
                {
                    "amount": 20,
                    "sender": "DGASDGFasdfasdfADFJKDLFK",
                    "recipient": "asdfasdfDSADFADFASDFASDF",
                    "transactionId": "a0ea3e9d89d44baa824dfe0f1443a685"
                },
                {
                    "amount": 30,
                    "sender": "DGASDGFasdfasdfADFJKDLFK",
                    "recipient": "asdfasdfDSADFADFASDFASDF",
                    "transactionId": "b3d4472f980b434cbc1a6527ac1b9e2f"
                }
            ],
            "nonce": 49897,
            "hash": "0000906b2fe94ce9de623cc58ba9c3cc6035b9ac3be5c4b59c5b8754efda4039",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1650511233946,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "57019e752db147938f044ebc3cf5aa63",
                    "transactionId": "589a8adedbac40b9a22142c750b80b94"
                },
                {
                    "amount": 40,
                    "sender": "DGASDGFasdfasdfADFJKDLFK",
                    "recipient": "asdfasdfDSADFADFASDFASDF",
                    "transactionId": "88df3d472b8b4320a9c32715101231b8"
                },
                {
                    "amount": 50,
                    "sender": "DGASDGFasdfasdfADFJKDLFK",
                    "recipient": "asdfasdfDSADFADFASDFASDF",
                    "transactionId": "ad57715073ea40dc937c6a24161dfd9b"
                },
                {
                    "amount": 60,
                    "sender": "DGASDGFasdfasdfADFJKDLFK",
                    "recipient": "asdfasdfDSADFADFASDFASDF",
                    "transactionId": "f39d56da4ec14f95b83643448509521e"
                },
                {
                    "amount": 70,
                    "sender": "DGASDGFasdfasdfADFJKDLFK",
                    "recipient": "asdfasdfDSADFADFASDFASDF",
                    "transactionId": "4085f20b8ee54b50bfe8ffe53a051f63"
                }
            ],
            "nonce": 28545,
            "hash": "0000c579cd5782b1dfe36d1af9aa8b97c5533e69f3cb971ac8bc1eaa1280a975",
            "previousBlockHash": "0000906b2fe94ce9de623cc58ba9c3cc6035b9ac3be5c4b59c5b8754efda4039"
        },
        {
            "index": 5,
            "timestamp": 1650511249048,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "57019e752db147938f044ebc3cf5aa63",
                    "transactionId": "f1289046d6a34207ac93537c69fb5f0c"
                }
            ],
            "nonce": 17910,
            "hash": "000073238168fab2a48165623015c2db1c4bec42be31268b1f9a34b78c1f12e3",
            "previousBlockHash": "0000c579cd5782b1dfe36d1af9aa8b97c5533e69f3cb971ac8bc1eaa1280a975"
        },
        {
            "index": 6,
            "timestamp": 1650511251550,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "57019e752db147938f044ebc3cf5aa63",
                    "transactionId": "87dbcd9bfd3d4088880b3e42aebe4be1"
                }
            ],
            "nonce": 38834,
            "hash": "00004819e90f8686624d3a6c6e32cee7fa7e5b63a20cd841065e9d05ccd48eab",
            "previousBlockHash": "000073238168fab2a48165623015c2db1c4bec42be31268b1f9a34b78c1f12e3"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "57019e752db147938f044ebc3cf5aa63",
            "transactionId": "cc4d82d065c64e1b8ddf87e495f6801d"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
}

console.log('Valid:', bitcoin.chainIsValid(bc1.chain))
