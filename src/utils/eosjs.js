Eos = require('eosjs')
let base = location.host

// Optional configuration..
config = {
  // keyProvider: ['5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'], // WIF string or array of keys..
  httpEndpoint: `//${base}`
  // mockTransactions: () => 'pass', // or 'fail'
  // transactionHeaders: (expireInSeconds, callback) => {
  //   callback(null /*error*/, headers)
  // },
  // expireInSeconds: 60,
  // broadcast: true,
  // sign: true
}

eos = Eos(config)
