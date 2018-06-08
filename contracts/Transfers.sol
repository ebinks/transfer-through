pragma solidity ^0.4.19;

contract Transfers {
	mapping(address => uint) balance;

	function deposit() public payable {
		balance[msg.sender] += msg.value;
	}

	function withdraw(address _addr, uint _value) public {
		require(balance[msg.sender] >= _value);
		balance[msg.sender] -= _value;
		_addr.transfer(_value);
	}

	function withdrawMulti(address[] _addrs, uint _value) public {
		uint l = _addrs.length;
		require(balance[msg.sender] >= _value * l);
		balance[msg.sender] -= _value * l;
		for (uint i = 0; i < l; i++){
			_addrs[i].transfer(_value);
		}
	}

	function withdrawThree(address[3] _addrs, uint _value) public {
		uint l = 3;
		require(balance[msg.sender] >= _value * l);
		balance[msg.sender] -= _value * l;
		for (uint i = 0; i < l; i++){
			_addrs[i].transfer(_value);
		}
	}
}