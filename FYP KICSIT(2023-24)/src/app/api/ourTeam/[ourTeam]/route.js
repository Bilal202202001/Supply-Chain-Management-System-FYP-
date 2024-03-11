import { NextResponse } from "next/server";
import { deleteOurTeam } from "@/app/lib/db";


export async function DELETE(request) {
    const url = new URL(request.url);
    const teamID = url.pathname.split('/').pop(); // Assuming the URL is something like /api/products/{productID}

    console.log("Deleting Team with ID:", teamID);

    const dbResponse = await deleteOurTeam(teamID);
    const { responseData, responseStatus } = dbResponse;

    return NextResponse.json(responseData, { status: responseStatus });
}