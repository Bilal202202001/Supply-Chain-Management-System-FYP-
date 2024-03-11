import { getProducts,addProducts } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { deleteProduct } from "@/app/lib/db";


export async function GET(request){
    const url = new URL(request.url);
    const queryParams = url.searchParams;
    const categoryId = queryParams.get('categoryId');

    console.log("Query Parameters:", queryParams);
    console.log("categoryId:", categoryId);

    const products = await getProducts(100,0,categoryId);
    return NextResponse.json(products,{status : 200});
}



export async function POST(request){

    const data = await request.json()
    
    console.log("Got data : ",data);
    
    const dbResponse = await addProducts(data)
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}



export async function DELETE(request) {
    const url = new URL(request.url);
    const productID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting product with ID:", productID);

    const dbResponse = await deleteProduct(productID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}


