import { addServices, getServices } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
   
    const services = await getServices()
    return NextResponse.json(services,{status : 200});
}

export async function POST(request){

    const data = await request.json()
    
    console.log("Got data : ",data);
    
    const dbResponse = await addServices(data)
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}