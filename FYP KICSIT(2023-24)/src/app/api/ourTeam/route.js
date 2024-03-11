import { addOurTeam, getOurTeam } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
    const ourTeam = await getOurTeam()
    return NextResponse.json(ourTeam,{status : 200});
}
export async function POST(request){

    const data = await request.json()
    
    console.log("Got data : ",data);
    
    const dbResponse = await addOurTeam(data)
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}