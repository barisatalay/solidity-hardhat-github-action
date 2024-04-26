import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : true,
    currency: process.env.REPORT_CURRENCY,
    coinmarketcap: process.env.COINGECKO_API_KEY,
    token: process.env.REPORT_MAIN_TOKEN,
    showTimeSpent: true,   
  }
};

export default config;
