import axios from 'axios';

export default axios.create({
  baseURL: `https://mybusiness.googleapis.com/v4/accounts/${process.env.GOOGLE_BP_API_ACCOUNT_ID}/locations/${process.env.GOOGLE_BP_API_LOCATION_ID}`,
  headers: {
    'Content-type': 'application/json',
  },
});
