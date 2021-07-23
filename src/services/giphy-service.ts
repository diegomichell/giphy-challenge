import env from '../../environment';
import { GiphyResponse } from '../models/giphy';

const {giphyApi} = env();

const GiphyService = {
  searchGif: async (search: string): Promise<GiphyResponse> => {
    const r = await fetch(`${giphyApi.url}/gifs/search?api_key=${giphyApi.apiKey}&q=${search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await r.json();
  }
};

export default GiphyService;
