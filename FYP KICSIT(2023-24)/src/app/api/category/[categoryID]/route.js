import { NextResponse } from "next/server";
import { deleteCategory } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const categoryID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting Categoryt with ID:", categoryID);

    const dbResponse = await deleteCategory(categoryID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}