// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.19;

contract MessageBoard {

    address public owner;
    uint256 public messageCounter;

    struct Message {
        uint256 msgId;
        address sender;
        string text;
        uint256 time;
        uint256 like;
    }

    mapping (address => uint256[]) sendedMessages;
    mapping (uint256 => Message) messages;

    constructor() {
        owner = msg.sender;
        messageCounter = 0;
    }

    modifier verifyMessageID(uint256 msgId) {
        require(msgId < messageCounter, "Invalid message ID");
        _;
    }

    function newMessage(string calldata text) public {
        messages[messageCounter] = Message({
            msgId: messageCounter,
            sender: msg.sender,
            text: text,
            time: block.timestamp,
            like: 0
        });

        messageCounter++;
    }

    function getMessage(uint256 msgId) public verifyMessageID(msgId) view returns (address,string memory, uint256, uint256) {
        Message memory message = messages[msgId];
        return (message.sender, message.text, message.time, message.like);
    }

    function likeMessage(uint256 msgId) public payable verifyMessageID(msgId) {
        require(msg.value == 0.001 ether, "Where are your money?");
        messages[msgId].like += 1;
        sendedMessages[msg.sender].push(msgId);
    }


    function withdraw(uint256 msgId) public verifyMessageID(msgId) {
        Message memory message = messages[msgId];
        require(msg.sender == message.sender, "You dick who");
        // 没有中间商赚差价
        payable(msg.sender).transfer(message.like * 0.0001 ether);
        messages[msgId].like = 0;
    }
    
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function paolu() public {
        require(msg.sender == owner);
        payable(owner).transfer(address(this).balance);
    }

}