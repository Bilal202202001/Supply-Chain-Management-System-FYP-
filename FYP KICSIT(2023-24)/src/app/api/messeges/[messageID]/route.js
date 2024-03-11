import { NextResponse } from "next/server";
import { deleteMessage } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const messageID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting Message with ID:", messageID);

    const dbResponse = await deleteMessage(messageID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}