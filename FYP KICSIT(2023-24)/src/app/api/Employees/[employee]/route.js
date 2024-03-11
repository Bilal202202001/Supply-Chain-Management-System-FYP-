import { NextResponse } from "next/server";
import { deleteEmployee } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const employeeID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting Employee with ID:", employeeID);

    const dbResponse = await deleteEmployee(employeeID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}