
import { addCategories, getCategory } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
   
    const categories = await getCategory()
    return NextResponse.json(categories,{status : 200});
}

export async function POST(request){

    const data = await request.json()
    
    console.log("Got data : ",data);
    
    const dbResponse = await addCategories(data)
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}

