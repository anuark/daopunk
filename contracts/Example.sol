//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

contract Example {
  string public message;

  function changeMsg(string calldata _message) external {
    message = _message;
  }
}
