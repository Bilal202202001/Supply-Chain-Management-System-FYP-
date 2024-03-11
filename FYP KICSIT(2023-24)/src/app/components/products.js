import React, { useEffect, useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import useSWR from 'swr';
import abi from "./contract/SupplyChain.json";
import { ethers } from 'ethers';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsList(catID) {
    const requestData = catID.catID;
    const endpoint = `/api/pricing?categoryId=${requestData}`;
    const { data, error, isLoading } = useSWR(endpoint, fetcher);

    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });

    const [account, setAccount] = useState("None");
    const[shipmentID,setShipmentID] = useState('');
    useEffect(() => {
        const connectWallet = async () => {
            const contractAddress = "0xb6806e5f9620f04714a272fa10bc2dd2fea99367";
            const contractABI = abi.abi;
            try {
                const { ethereum } = window;

                if (ethereum) {
                    const account = await ethereum.request({
                        method: "eth_requestAccounts",
                    });

                    window.ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });

                    window.ethereum.on("accountsChanged", () => {
                        window.location.reload();
                    });

                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(
                        contractAddress,
                        contractABI,
                        signer
                    );
                    setAccount(account[0]);
                    setState({ provider, signer, contract });
                } else {
                    alert("Please install metamask");
                }
            } catch (error) {
                console.log(error);
            }
        };

        connectWallet();
    }, []);


    //Get Balance Function 
    const [accountBalance, setAccountbalance] = useState();
    const { contract } = state;
    const handleFormSubmit = async (event) => {
        event.preventDefault();




        const formData = new FormData();
        formData.append('name', event.target.name.value);
        formData.append('productid', event.target.productid.value);
        formData.append('productname', event.target.productname.value);
        formData.append('quantity', event.target.quantity.value);
        formData.append('totalPrice', event.target.totalPrice.value);

        const name = formData.get('name');
        const productid = formData.get('productid');
        const productname = formData.get('productname');
        const price = formData.get('totalPrice').replace('$', '');


        const totalPriceInt = parseFloat(price); // Assuming the value is in base 10
        const totalPriceDivided = totalPriceInt / 10000000;

        const amount = { value: ethers.utils.parseEther(`${totalPriceDivided}`) };
        const transaction = await contract.pay(productid, name, productname, amount);
        const trans = await transaction.wait();
        console.log("Check : ", trans);
        console.log("Transaction is done",);


        const endpoint = '/api/orderShipment/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        };

        const response = await fetch(endpoint, options);
        const result = await response.json();
        if (response.status === 201) {
            setShipmentID(result[0].id);
            event.target.reset();
            setOrderFormVisibility(false);
            setShowSuccessNotification(true);

            setTimeout(() => {
                setShowSuccessNotification(false);
            }, 10000);
        }
    };

    useEffect(() => {
        const getBalanceOfAccount = async () => {
            const balance = await contract.getAccountBalance()
            const balanaceInEths = balance / 1000000000000000000;
            const balance_str = balanaceInEths.toString()
            setAccountbalance(balance_str);
        };
        contract && getBalanceOfAccount();
    }, [contract]);

    //Form Datas Temporary


    const [formData, setFormData] = useState({
        name: '',
        productid: '',
        productname: '',
        quantity: 0,
        totalPrice: 0,
    });

    const [isOrderFormVisible, setOrderFormVisibility] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    const handleOpenForm = (productid, productName) => {
        setFormData({
            name: '',
            productid: productid,
            productname: productName,
            quantity: 0,
            totalPrice: 0,
        });
        setOrderFormVisibility(true);
    };

    const handleCloseForm = () => {
        setOrderFormVisibility(false);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        if (name === 'quantity') {
            const quantity = parseInt(value, 10);
            const price = parseFloat(data.find(product => product.id === formData.productid)?.price) || 0;
            const totalPrice = quantity * price;

            setFormData((prevData) => ({ ...prevData, [name]: value, totalPrice }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    useEffect(() => {
        return () => {
            setShowSuccessNotification(false);
        };
    }, []);

    if (error) return 'An Error Occurred';
    if (isLoading) return 'Loading...';

    return (
        <>
            {showSuccessNotification && (
                <div className="w-full flex flex-col justify-center items-center bg-green-500 my-4 text-white p-4 text-center">
                    Order placed successfully!
                    <span>Shipment ID : {shipmentID}</span>
                </div>
            )}

            <div className='w-full flex flex-col justify-center items-center text-sm p-2 my-2 bg-gray-300 dark:bg-slate-950'>
                <p className='flex  items-end justify-center w-2/5'>
                    <Unicons.UilUserCheck width={20} className="text-orange-600 me-2" />
                    {account}
                </p>
                <p className='flex items-end justify-center w-2/5'>
                    <Unicons.UilBitcoin width={20} className="text-green-600 me-2" />

                    {accountBalance}  Eths
                </p>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-5 mt-8 gap-[0px] items-center">
                {data &&
                    data.map((products, idx) => (
                        <section className=" relative md:py-5 py-5" id="pricing" key={idx}>
                            <div className=" container m-2 p-0">
                                <div className="mt-8 items-center w-full">
                                    <div className="w-9/12 shadow dark:shadow-violet-600 dark:shadow-gradient-to-t rounded-md p-0 bg-gradient-to-t bg-gray-200 dark:bg-transparent">
                                        <div className="w-full flex items-center justify-center h-52  w-full">
                                            <img src={products.img} alt="No Pic" className="rounded-t-lg rounded-b-none h-full w-full" />
                                        </div>

                                        <h2 className="text-black font-lexend text-center m-1 text-sm font-semibold dark:text-white">{products.name}</h2>

                                        <div className="mt-2 flex items-center">
                                            <div className="mb-6 ml-2 text-black/50 font-lexend w-4/5">
                                                <span className="relative h6 -top-5 text-xl dark:text-orange-600">$</span>
                                                <span className="text-4xl h6 font-lexend font-bold text-black dark:text-white">{products.price}</span>
                                            </div>
                                            <div
                                                className="py-1 mr-1 px-2 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-4/5 dark:bg-gradient-to-t dark:bg-violet-600 dark:border-gradient-to-t dark:border-violet-600 cursor-pointer"
                                                onClick={() => handleOpenForm(products.id, products.name)}
                                            >
                                                Buy Now
                                            </div>
                                        </div>
                                        <div className="border-b border-slate-200/10"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
            </div>

            {/* Form Modal or Component */}
            {isOrderFormVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <form className="bg-white p-8 rounded-md shadow-md" onSubmit={handleFormSubmit}>
                        <h2 className="text-2xl font-bold mb-4">Purchase Form</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                               Customer's Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="productid" className="block text-sm font-medium text-gray-600">
                                Product ID
                            </label>
                            <input type="text" id="productid" name="productid" value={formData.productid} readOnly className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="productname" className="block text-sm font-medium text-gray-600">
                                Product Name
                            </label>
                            <input type="text" id="productname" name="productname" value={formData.productname} readOnly className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">
                                Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-600">
                                Total Price
                            </label>
                            <input
                                type="text"
                                id="totalPrice"
                                name="totalPrice"
                                value={`$${formData.totalPrice || 0}`}
                                readOnly
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </div>
                        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-md">
                            Confirm
                        </button>
                        <button type="button" onClick={handleCloseForm} className="bg-gray-400 text-black px-4 py-2 ml-6 rounded-md pointer:cursor">
                            Close
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
