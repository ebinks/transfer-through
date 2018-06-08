pragma solidity ^0.4.19;

import "./Transfers2.sol";

contract Transfers {
	mapping (address => uint) public balances;
	Transfers2 t;
	address t_addr;

	constructor() public {
		t = new Transfers2();
		t_addr = address(t);
	}

	function transfer(address _addr, uint _value) public {
		require(balances[msg.sender] >= _value);
		bytes4 sig = bytes4(keccak256("transfer(address)"));
		t_addr.call.value(_value)(sig, _addr);		
	}

	function myBalance() public returns (uint) {
		return balances[msg.sender];
	}

	function deposit() public payable returns (uint) {
		balances[msg.sender] += msg.value;
		return balances[msg.sender];
	}

	function withdraw(address _addr, uint _value) public {
		require(balances[msg.sender] >= _value);
		balances[msg.sender] -= _value;
		_addr.transfer(_value);
	}

	function withdrawMulti(address[] _addrs, uint _value) public {
		uint l = _addrs.length;
		require(balances[msg.sender] >= _value * l);
		balances[msg.sender] -= _value * l;
		for (uint i = 0; i < l; i++){
			_addrs[i].transfer(_value);
		}
	}
}