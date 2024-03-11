
import { getReviews } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
   
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    const Limit = queryParams.get('Limit');

    // console.log("Query Parameters:", queryParams);
    // console.log("categoryId:", Limit);


    const reviews = await getReviews(Limit,0)
    return NextResponse.json(reviews,{status : 200});
}


// export async function POST(request){
//     const data = await request.json()
//     const url = data && data.url ? data.url : null
//     const validURL = await isValidURL(url, ["jref.io"])  
//     if(!validURL){
//         return NextResponse.json({"error" : `${url} is Invalid URL` },{status : 400})
//     } 
//     const dbResponse = await addLink(url)
//     const {responseData, responseStatus} = dbResponse
//     return NextResponse.json(responseData,{status : responseStatus})
// }

