import axios from "axios";

export async function GET() {
  await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`);
}