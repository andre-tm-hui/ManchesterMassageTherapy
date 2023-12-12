import { NextResponse } from "next/server";
import { fetchGoogleReview } from "./fetchGoogleReview";
import { fetchInstagram } from "./fetchInstagram";

export const dynamic = 'force-dynamic'

export async function GET() {
  let res = NextResponse;
  console.log("hi");
  let err = await fetchInstagram();
  if (err.status === 400) {
    return res.json({ message: err.msg, status: 400});
  }
  err = await fetchGoogleReview();
  if (err.status === 400) {
    return res.json({ message: err.msg, status: 400 });
  }
  return res.json({ message: "success", status: 200 });
}