import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
export default function UpdateStatusForm({ shipmentID, onUpdate }) {
    const handleUpdateStatus = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log("Form data : ", data);
        const JsonData = JSON.stringify(data)
        console.log("Form Json Data : ", JsonData)
        console.log("ShipmentID : ", shipmentID);
        const endpoint = `/api/shipments/${shipmentID}`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JsonData
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        if (response.status === 201) {
            event.target.reset();
        }

    };

    return (
        <div>
            <form onSubmit={handleUpdateStatus} className='flex justify-center items-center'>
                <input
                    type="text"
                    name='status'
                    placeholder="Update Status"
                    className='form-input  py-2 px-3 h-10 bg-transparent dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded  focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mr-1'
                />
                <button type="submit" className=' bg-green-600 px-3 py-1 rounded-lg'> <Unicons.UilNavigator  height={20} width={20} className="text-white" /></button>
            </form>
        </div>
    );
}