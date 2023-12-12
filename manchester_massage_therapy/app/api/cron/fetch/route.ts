import { fetchGoogleReview } from "./fetchGoogleReview";
import { fetchInstagram } from "./fetchInstagram";

export const dynamic = 'force-dynamic'

export async function GET(req: any, res: any) {
  console.log("hi");
  let err = await fetchInstagram();
  if (err.status === 400) {
    res.json({ message: err.msg }).status(400).send();
  }
  err = await fetchGoogleReview();
  if (err.status === 400) {
    res.json({ message: err.msg }).status(400).send();
  }
  res.json({ message: "success" }).status(200).send();
}