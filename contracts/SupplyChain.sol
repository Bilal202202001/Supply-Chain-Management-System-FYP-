// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2;

contract SupplyChain {
    address payable deployer;

    constructor() {
        deployer = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == deployer, "Wrong Person Calling");
        _;
    }

    struct Customer {
        string customerName;
        uint256 amount;
        address adr;
        uint256 timeStamp;
        uint256 productID;
        string productName;
    }

    mapping(address => Customer) customerMap;

    uint256 count = 0;
    Customer[] customers;

    function pay(uint256 _productID,string memory _customerName,string memory _productName) public payable {
        deployer.transfer(address(this).balance);
        customers.push(
            Customer(
                _customerName,
                msg.value,
                msg.sender,
                block.timestamp,
                _productID,
                _productName
            )
        );
        customerMap[msg.sender] = customers[count];
        count += 1;
    }

    function getAccountBalance() public view returns (uint256) {
        return msg.sender.balance;
    }

    function getCustomersDetails()public view onlyOwner returns (Customer[] memory)
    {
        return customers;
    }

    function transferAmount(address payable reciever) public payable onlyOwner {
        reciever.transfer(msg.value);
    }

    function customersSelfOrderRecord()public view returns (Customer[] memory)
    {
        Customer[] memory customerArray = new Customer[](count);

        for (uint256 i = 0; i < count; i++) {
            if (msg.sender == customers[i].adr) {
                customerArray[i] = customers[i];
            }
        }

        return customerArray;
    }

    function ordersByAddress(address _customer) public view onlyOwner returns (Customer[] memory) {
        Customer[] memory customerArray = new Customer[](count);

        for (uint256 i = 0; i < count; i++) {
            if (_customer == customers[i].adr) {
                customerArray[i] = customers[i];
            }
        }

        return customerArray;
    }
}
