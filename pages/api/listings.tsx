import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    console.log('<><><><>apis called >>>>>>>>>>>>>>>>>>>>>>>>>>>>', req);
    if (req.method === 'GET') {
      const url = `${process.env.API_URL}/listings`;
      const response = await axios.get(url);

      if (response.status === 200) {
        res.status(200).json(response.data);
      } else {
        res.status(response.status).json({ error: 'Request failed' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
