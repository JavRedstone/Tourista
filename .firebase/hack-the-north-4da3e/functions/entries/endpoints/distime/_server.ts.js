import axios from "axios";
import { j as json } from "../../../chunks/index.js";
import { M as MAPS_API_KEY } from "../../../chunks/private.js";
const POST = async ({ request }) => {
  const { location, nextLocation } = await request.json();
  let url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${nextLocation}&origins=${location}&units=metric&key=${MAPS_API_KEY}`;
  const options = {
    method: "POST",
    url,
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  };
  const response = await axios.request(options);
  const di = response.data.rows[0].elements[0].distance.text;
  const du = response.data.rows[0].elements[0].duration.text;
  return json({ data: { distance: di, duration: du } }, { status: 200 });
};
export {
  POST
};
