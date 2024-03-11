import { NextResponse } from "next/server";
import {deleteSupplier } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const supplierID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting Supplier with ID:", supplierID);

    const dbResponse = await deleteSupplier(supplierID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}