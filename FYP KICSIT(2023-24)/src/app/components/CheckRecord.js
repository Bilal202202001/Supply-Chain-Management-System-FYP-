'use client'

import * as Unicons from '@iconscout/react-unicons';
import { useState, useEffect } from "react";
import abi from "./contract/SupplyChain.json";
import { ethers } from 'ethers';
export default function TrackContractDetails() {



    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });
    const [account, setAccount] = useState("None");
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

    const [customers, setDetails] = useState([]);
    const [accountBalance, setAccountbalance] = useState();
    const { contract } = state;

    useEffect(() => {
        const getCustomers = async () => {
            const customersDetails = await contract.getCustomersDetails();
            setDetails(customersDetails);
        };
        contract && getCustomers();
    }, [contract]);

    useEffect(() => {
        const getBalanceOfAccount = async () => {
            const balance = await contract.getAccountBalance()
            const balanaceInEths = balance / 1000000000000000000;
            const balance_str = balanaceInEths.toString()
            setAccountbalance(balance_str);
        };
        contract && getBalanceOfAccount();
    }, [contract]);

    const [serachResults, SetCustomerSearch] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const result = await contract.customersSelfOrderRecord();
            SetCustomerSearch(result);
        };
        contract && getData();
    }, [contract]);


    return (
        <>
            <p className='text-2xl font-bold mb-4 text-center'>Customer Orders</p>
            <div className="flex flex-col items-center">
                <table class="font-lexend border-separate shadow shadow-slate-600 p-5 rounded-xl m-5 text-center">
                    <thead className=' mt-20'>
                        <tr >
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Address</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Customer Name</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Amount (Eths)</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Product ID</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 px-3 rounded-lg '>Product Name</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 px-3 rounded-lg '> TimeStamp</th>
                        </tr>
                    </thead>
                    <tbody>

                        {serachResults.map((Customer) => {
                            if (Customer.amount != 0 ) {
                                return (
                                    <tr key={Math.random()}>
                                        <td className='p-2'>{Customer.adr}</td>
                                        <td className='p-2'>{Customer.customerName}</td>
                                        <td className='p-2'>{parseFloat(Customer.amount) / 1000000000000000000}</td>
                                        <td className='p-2'>{String(Customer.productID)}</td>
                                        <td className='p-2'>{Customer.productName}</td>
                                        <td className='p-2'>{new Date(Customer.timeStamp * 1000).toLocaleString()}</td>
                                    </tr>
                                );
                            } else {
                                return null; // or any other element if you don't want to render anything
                            }
                        })}

                    </tbody>
                </table>
            </div>

        </>
    );
}
