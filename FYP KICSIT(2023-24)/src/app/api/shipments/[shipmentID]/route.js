import { NextResponse } from "next/server";
import { editShipment, getShipmentRecord } from "@/app/lib/db";

export async function POST(request) {
   
    const url = new URL(request.url);
    const shipmentID = url.pathname.split('/').pop();

    console.log("Editing shipment with ID:", shipmentID);

    const data = await request.json()
    
    console.log("Got data : ",data);
    
    const dbResponse = await editShipment(shipmentID,data);
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}

export async function GET(request){
   
    const url = new URL(request.url);
    console.log(url);
    const idValue = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting shipment with ID:", idValue);

    const link = await getShipmentRecord(100,0,idValue); 
    return NextResponse.json(link,{status:200})
}