import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaclient";

export async function POST(request: Request) {
  try {
    const {
      gmail,
      PurposeOfUse,
      website,
      description,
      keywords,
      credits,
      competitors,
      activePlan,
      isDemoProvided,
      currentCredits,
    } = await request.json();

    console.log(
      gmail,
      PurposeOfUse,
      website,
      description,
      keywords,
      competitors,
      activePlan,
      isDemoProvided,
      currentCredits
    );

    const response = await prisma.userData.create({
      data: {
        gmail,
        PurposeOfUse,
        website,
        description,
        keywords,
        competitors,
        activePlan,
        isDemoProvided,
        currentCredits,
      },
    });
    if(response){
      return NextResponse.json({ success: true });
    }
    
  } catch (error) {
    console.error("Error updating tempdb.json:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update onboarding status" },
      { status: 500 }
    );
  }
}
