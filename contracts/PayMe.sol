//SPDX-License-Identifier:GPL-3.0
pragma solidity ^0.8.0;

contract PayMe{
    using PriceConvertered for uint256;
    uint public  MIN_USD= 50*(1e18);
    address[] public funders;
    address public immutable owner;
    constructor(){
        owner = msg.sender;
    }
    mapping(address=>uint256)addressToAmountSent;
    function fund()public payable{
        require(msg.value.getConversionRate() >= MIN_USD,"DidNot send enough!");
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender]+=msg.value;
    }
    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }
    function withdraw()public onlyOwner{
            for(uint256 i =0;i<funders.length;i++){
                address funder = funders[i];
                addressToAmountSent[funder]=0;
            }
            funders = new address[](0);
            (bool callSuccess,) = payable(msg.sender).call{value: address(this).balance}("");
            require(callSuccess,"Not successfull");
    }
}