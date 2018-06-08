pragma solidity ^0.4.19;

contract Transfers2 {
	function transfer(address _addr) public payable {
		_addr.transfer(msg.value);
	}

	function transferMulti(address _addr1, address _addr2) public payable {
		_addr1.transfer(msg.value/2);
		_addr2.transfer(msg.value/2);
	}
}