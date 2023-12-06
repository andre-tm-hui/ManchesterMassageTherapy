import { fetchGoogleReview } from "./fetchGoogleReview";
import { fetchInstagram } from "./fetchInstagram";

export default async function GET() {
  await fetchInstagram();
  await fetchGoogleReview();
}