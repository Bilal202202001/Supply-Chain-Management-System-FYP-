import { NextResponse } from "next/server";
import { deleteProduct } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const productID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting product with ID:", productID);

    const dbResponse = await deleteProduct(productID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}