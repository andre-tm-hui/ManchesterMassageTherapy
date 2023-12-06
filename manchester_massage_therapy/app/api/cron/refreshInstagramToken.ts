import axios from "axios";

export const dynamic = 'force-dynamic'

export async function GET() {
  await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`).catch((_) => {return;});
}