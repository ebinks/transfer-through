var Transfers = artifacts.require("Transfers")
var Transfers2 = artifacts.require("Transfers2")

contract("Transfers", function(accounts) {
	var addrA = accounts[0]

	it("should deploy", async() => {
		transfers = Transfers.deployed()
		transfers2 = Transfers2.deployed()

		assert(transfers != undefined)
		assert(transfers2 != undefined)
	})
})
