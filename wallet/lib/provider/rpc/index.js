const RPC = {
  MAINNET: {
    id: 88,
    rpc: 'https://rpc.tomochain.com'
  },
  TESTNET: {
    id: 89,
    rpc: 'https://testnet.tomochain.com'
  }
}

var getRPC = function (net) {
  switch (net) {
    case 88:
      return RPC.MAINNET.rpc;
    case 89:
      return RPC.TESTNET.rpc;
    case 'mainnet':
      return RPC.MAINNET.rpc;
    case 'testnet':
      return RPC.TESTNET.rpc;
    default:
      return RPC.TESTNET.rpc;
  }
}

module.exports = getRPC;