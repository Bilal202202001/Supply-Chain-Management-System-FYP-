import {addPrices, getPrice } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
    const ourTeam = await getPrice()
    return NextResponse.json(ourTeam,{status : 200});
}
export async function POST(request){

    const data = await request.json()
    
    console.log("Got data : ",data);
    
    const dbResponse = await addPrices(data)
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}