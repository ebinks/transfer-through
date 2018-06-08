var Transfers = artifacts.require("Transfers");
var Transfers2 = artifacts.require("Transfers2");

contract('Transfers', function(accounts) {
    var addressA = web3.eth.accounts[0];
    var addressB = web3.eth.accounts[1];
    var addressC = web3.eth.accounts[2];
    var addressD = web3.eth.accounts[3];

    var transfers;
    web3.eth.defaultAccount = web3.eth.accounts[0];

    it("should initialize", async() => {
    	transfers = await Transfers.new();
    	transfers2 = await Transfers2.new();
    	assert(transfers !== undefined, "did not deploy");
    	assert(transfers2 !== undefined, "did not deploy");
    })

    it("should deposit", async() => {
    	let hash = await transfers.deposit({from: addressA, value: 100});
    	console.log(hash.tx);
    	let bal = await transfers.balances.call(addressA, {from: addressA});
    	console.log(bal);
    })

    it("should withdraw", async() => {
    	let val = 5;
    	let prevB = web3.eth.getBalance(addressB);
    	console.log(prevB);
    	let hash = await transfers.withdraw(addressB, val, {from: addressA});
    	let postB = web3.eth.getBalance(addressB);
    	console.log(postB);
    	//assert((web3.fromWei(postB) - web3.fromWei(prevB)) == val, "did not withdraw");
    })

    it("should transfer through other contract", async() => {
    	let val = 10;
    	let prevB = web3.eth.getBalance(addressB);
    	console.log(prevB);

    	let hash = await transfers.transfer(addressB, val, {from: addressA});
    	let postB = web3.eth.getBalance(addressB);
    	console.log(postB);

    	//assert((web3.fromWei(prevB,'wei') - web3.fromWei(postB,'wei')) == val, "did not transfer");
    })

     it("should transfer multi through other contract", async() => {
    	let val = 10;
    	let prevB = web3.eth.getBalance(addressB);
    	let prevC = web3.eth.getBalance(addressC);

    	let hash = await transfers.transferTwo(addressB,addressC, val, {from: addressA});
    	let postB = web3.eth.getBalance(addressB);
    	let postC = web3.eth.getBalance(addressC);

    	console.log(prevB);
    	console.log(postB);
    	console.log(prevC);
    	console.log(postC);
    	//assert((web3.fromWei(prevB,'wei') - web3.fromWei(postB,'wei')) == val, "did not transfer");
    })   

})