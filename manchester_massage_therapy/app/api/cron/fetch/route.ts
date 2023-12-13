import { fetchGoogleReview } from "./fetchGoogleReview";
import { fetchInstagram } from "./fetchInstagram";

export const dynamic = 'force-dynamic'

export async function GET() {
  let err = await fetchInstagram();
  if (err.status === 400) {
    return Response.json({ message: err.msg, status: 400});
  }
  err = await fetchGoogleReview();
  if (err.status === 400) {
    return Response.json({ message: err.msg, status: 400 });
  }
  return Response.json({ message: "success", status: 200 });
}