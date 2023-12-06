import { fetchGoogleReview } from "./fetchGoogleReview";
import { fetchInstagram } from "./fetchInstagram";

export const dynamic = 'force-dynamic'

export async function GET() {
  await fetchInstagram();
  await fetchGoogleReview();
}