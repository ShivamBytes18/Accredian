import { NextRequest, NextResponse } from "next/server";

// NOTE: This is a mock lead-capture endpoint for the assignment.
// It validates the payload and logs it server-side. Serverless platforms
// like Vercel don't offer persistent disk storage, so in a production
// build this is where you'd forward the payload to a CRM, database,
// or email service (e.g. HubSpot, Airtable, Resend, Supabase, etc).

type EnquiryPayload = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let payload: EnquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, company, teamSize, message } = payload;

  if (!name?.trim() || !email?.trim() || !company?.trim() || !teamSize?.trim()) {
    return NextResponse.json(
      { success: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Mock persistence: log the lead. Replace with a real integration
  // (database insert, CRM webhook, email notification, etc).
  console.log("New enterprise enquiry received:", {
    name: name.trim(),
    email: email.trim(),
    company: company.trim(),
    teamSize: teamSize.trim(),
    message: message?.trim() || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
