import { NextResponse } from "next/server";
import { deleteReview } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const reviewID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting Review with ID:", reviewID);

    const dbResponse = await deleteReview(reviewID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}