const Blockchain = require('./blockchain')

const bitcoin = new Blockchain

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

const previousBlockHash = 'adfjalskdjfalskdfjasdfasdf'
const currentBlockData = [
    {
        amount: 10,
        sender: 'adklfjaklsdfja',
        recipient: 'adfjalksdfjalk;dfasdfasdfaad'
    },
    {
        amount: 30,
        sender: 'fdfadsfasdfaklsdfja',
        recipient: 'adsf4rfw4rfa4ffaad'
    },
    {
        amount: 200,
        sender: 'djfapdfphjfpoadhjfpaoshdfpoasd',
        recipient: 'deunfnuadhfikdjfhkajhfaa'
    }
]
const nonce = 100

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))
