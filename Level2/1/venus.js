/*
0x7872f4f3766cdbf8f559769f4ded2415e399e6ccb493dbfacb0b351006335117
0x31d546d088a6e7f20f0f0ca7345d49913e8b240aea91b6c0fe8d6b50b9156467
*/

const Web3 = require("web3");

const web3 = new Web3("https://cloudflare-eth.com")

const abi = require('./abi.json');

const contractAddress = "0xA07c5b74C9B40447a954e1466938b865b6BBea36";

// Secret
const private_key = "";

const account = "0xDA5b03dc80f92986fF7EcE16E88a03A147BE88E8";

web3.eth.accounts.wallet.add(private_key);

var Contract = new web3.eth.Contract(abi, contractAddress,{
  from: account,
  gasPrice: "5000000000",
  gas: "364523",});

var Provider = async () => {
  var resp = await Contract.methods.mint().send({from: account, value: 5*(10**15)});
  console.log(resp.transactionHash);
};
  

var Remove = async () => {
  var Balance = await Contract.methods.balanceOf(account).call();
  var resp = await Contract.methods.redeem(Balance).send({from: account});
  console.log(resp.transactionHash);
};

Provider();
Remove();