require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("solidity-coverage");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY1 = process.env.PRIVATE_KEY;
const BASESCAN_RPC_URL= process.env.BASESCAN_RPC_URL;
// const COINMARKETCAP_API = process.env.COINMARKETCAP_API;
const BASESCAN_API = process.env.BASESCAN_API;
module.exports = {
    defaultNetwork: "baseSepoila",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        baseSepoila: {
            chainId: 84532,
            blockConfirmations: 2,
            url: BASESCAN_RPC_URL,
            saveDeployments: true,
            accounts: [PRIVATE_KEY1]
            // accounts:{
            //     mnemonic: mnemonic
            // },
        },
    },
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.8.7" }],
    },

    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
            3141: 0,

        },
        player: {
            default: 3141,
        },
    },
    // gasReporter: {
    //     enabled: true,
    //     currency: "USD",
    //     outputFile: "gas-report.txt",
    //     coinmarketcap: COINMARKETCAP_API,
    //     token: "ETH",
    //     noColors: true,
    // },
    mocha: {
        timeout: 500000, //500 max seconds
    },
    etherscan: {
        apiKey: {
            fvm: BASESCAN_API,
            baseSepoila: BASESCAN_API,
        },
        customChains: [
            {
              network: "baseSepoila",
              chainId: 84532,
              urls: {
                apiURL: "https://api-sepolia.basescan.org/api",
                browserURL: "https://sepolia.basescan.org"
              }
            }
          ]
    },
};
