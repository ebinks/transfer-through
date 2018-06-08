var Transfers = artifacts.require("Transfers");
var Transfers2 = artifacts.require("Transfers2");

contract('ShyftBridge', function(accounts) {
    var addressA = web3.eth.accounts[0];
    var addressB = web3.eth.accounts[1];
    var transfers;
    web3.eth.defaultAccount = web3.eth.accounts[0];

    it("should initialize", async() => {
    	transfers = await Transfers.new();
    	transfers2 = await Transfers2.new();
    	assert(transfers !== undefined, "");
    	assert(transfers2 !== undefined, "");
    })

    it("should deposit", async() => {
    	let hash = await transfers.deposit({from: addressA, value: 100});
    	let bal = await transfers.deposit.call({from: addressA});
    	//console.log(bal);
    })

    it("should withdraw", async() => {
    	let val = 5;
    	let prevB = await web3.eth.getBalance(addressB);
    	console.log(prevB);
    	let hash = await transfers.withdraw(addressB, val, {from: addressA});
    	//assert(await web3.eth.getBalance(addressB) - prevB == val, "");
    })

    it("should transfer through other contract", async() => {
    	let val = 10;
    	let prevB = await web3.eth.getBalance(addressB);
    	let hash = await transfers.transfer(addressB, val, {from: addressA});
    	let postB = await web3.eth.getBalance(addressB);
    })
})