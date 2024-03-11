import { NextResponse } from "next/server";
import { deleteSeller } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const sellerID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting Seller with ID:", sellerID);

    const dbResponse = await deleteSeller(sellerID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}