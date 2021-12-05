pragma solidity ^0.7.3;

contract Example {
  string public message;

  function changeMsg(string calldata _message) external {
    message = _message;
  }
}
