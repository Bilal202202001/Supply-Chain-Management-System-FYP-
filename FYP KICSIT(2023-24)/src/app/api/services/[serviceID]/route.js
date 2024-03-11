import { NextResponse } from "next/server";
import { deleteService } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const serviceID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting service with ID:", serviceID);

    const dbResponse = await deleteService(serviceID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}