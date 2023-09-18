import axios from 'axios';
import { json, type RequestHandler } from '@sveltejs/kit';
import { MAPS_API_KEY } from '$env/static/private';


export const POST: RequestHandler = async ({request}) => {
  const { location, nextLocation } = await request.json();
  let url: string = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${nextLocation}&origins=${location}&units=metric&key=${MAPS_API_KEY}`;
  const options = {
    method: 'POST',
    url: url,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    }
  };
  const response = await axios.request(options);
  const di: string = response.data.rows[0].elements[0].distance.text;
  const du: string = response.data.rows[0].elements[0].duration.text;
  return json({ data: { distance: di, duration: du } }, { status: 200 })
  // return json({ data: response.data }, { status: 200 })
}
