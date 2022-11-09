//https://eth-goerli.g.alchemy.com/v2/EnGOSChKuHt_BKzc86C1wNlx-zZWJsBg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/EnGOSChKuHt_BKzc86C1wNlx-zZWJsBg',
      accounts: ['80df2cc86da60a37288ef9a05f6f867723c928edea821fc200127ff095378390'],
    },
  },
};