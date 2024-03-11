
import { addMesseges,getMesseges } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
   
    const link = await getMesseges(); 
    return NextResponse.json(link,{status:200})
}


export async function POST(request){

    const data = await request.json()
    
    // console.log("Got data : ",data);
    
    const dbResponse = await addMesseges(data);
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}

