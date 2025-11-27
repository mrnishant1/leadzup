import { prisma } from "@/lib/prismaclient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { gmail } = await req.json();

    const response = await prisma.userData.findUnique({
      where: { gmail },
    });

    if (!response) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const {
      PurposeOfUse,
      website,
      description,
      keywords,
      competitors,
      activePlan,
      isDemoProvided,
      currentCredits,
    } = response;

    const neededResponse = {
      PurposeOfUse,
      website,
      description,
      keywords,
      competitors,
      activePlan,
      isDemoProvided,
      currentCredits,
    };
    console.log(neededResponse);

    return NextResponse.json(neededResponse, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
