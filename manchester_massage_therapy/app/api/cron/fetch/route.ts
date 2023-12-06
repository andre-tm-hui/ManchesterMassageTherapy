import { fetchGoogleReview } from "./fetchGoogleReview";
import { fetchInstagram } from "./fetchInstagram";

export async function GET() {
  await fetchInstagram();
  await fetchGoogleReview();
}