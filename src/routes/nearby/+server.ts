import axios from 'axios';
import { COHERE_API_KEY } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({request}) => {
  const { location, type } = await request.json();
  const options = {
    method: 'POST',
    url: 'https://api.cohere.ai/v1/generate',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${COHERE_API_KEY}`,
    },
    data: {
      max_tokens: getMaxTokens(type),
      temperature: 0,
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: getPrompt(location, type)
    }
  }
  const response = await axios.request(options);
  const text: string = response.data.generations[0].text;
  if (text.indexOf('1.') !== -1) {
    return json({ data: text.slice(1).split('\n').slice(0, -1).map((place: string) => place.slice(3)) }, { status: 200 })
  } else {
    return json({ data: text.slice(1).split('\n').slice(0, -1) }, { status: 200 })
  }
}

function getPrompt(location: string, type: string) {
  if (type.includes('list')) {
    return `Provide a list in order of preference of the top 10 ${type.substring(5)} to go on your next vacation to ${location}. Do not display numbering and line breaks.`
  }
  else if (type == 'description') {
    return `Give a very profound and detailed explanation of ${location}, by highlighting its attractions to tourists, its time zone, and other important information. Write this in one paragraph.`
  }
}

function getMaxTokens(type: string) {
  if (type.includes('list')) {
    return 100
  }
  else if (type == 'description') {
    return 200
  }
}