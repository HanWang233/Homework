const Web3 = require("web3");
const web3 = new Web3("https://bsc-dataseed.binance.org/")

const abi = require('./abi.json');

var Contract = new web3.eth.Contract(abi, "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73");

var Solve = async () => {
    const length = await Contract.methods.allPairsLength().call();
    console.log("The total length is:"+length);
    for(var index = 0; index < length; index++){
        var data = await Contract.methods.allPairs(index).call();
        console.log(data);
    }
  };
Solve();
