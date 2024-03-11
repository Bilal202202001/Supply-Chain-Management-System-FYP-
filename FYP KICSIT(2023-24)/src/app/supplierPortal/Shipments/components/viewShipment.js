'use client'
import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import useSWR from 'swr';
import UpdateStatusForm from './UpdateStatusForm';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewShipment(){
  const endpoint = '/api/shipments';
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher);

  if (error) return 'An Error Occurred';
  if (isLoading) return 'Loading...';

  const handleDelete = async (shipmentID) => {
    const response = await fetch(`/api/shipments/${shipmentID}`, {
      method: 'DELETE',
    });
    mutate();
  };

  const handleUpdate = () => {
    mutate();
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">SHIPMENTS</h3>
        <table className="font-lexend border-separate shadow shadow-slate-600 p-5 rounded-xl w-12/12 m-5 text-center">
          <thead className=" mt-20">
            <tr>
              <th className="bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg">Name</th>
              <th className="bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg">Quantity</th>
              <th className="bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg">Product ID</th>
              <th className="bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg">Product name</th>
              <th className="bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg">Status</th>
              <th className="bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg">Time Stamp</th>
              <th className="bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((shipment, idx) => {
                return (
                  <tr key={idx}>
                    <td className="p-2">{shipment.name}</td>
                    <td className="p-2">{shipment.quantity}</td>
                    <td className="p-2">{shipment.productname}</td>
                    <td className="p-2">{shipment.productid}</td>
                    <td className="p-2">{shipment.status}</td>
                    <td className="p-2">{shipment.createdAt}</td>
                    <td className="p-2">
                      <UpdateStatusForm shipmentID={shipment.id} onUpdate={handleUpdate} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};




