import axios from 'axios';
import { RentalsResponse } from '../types/services';
import { RentalsConfig } from '../types/rentals';

type QueryParamKeys = {
  [key: string]: string
}
export const getRentals = async (params: RentalsConfig, signal?: AbortSignal): Promise<RentalsResponse> => {
  const keys: QueryParamKeys = {
    filter: 'filter[keywords]',
    pageLimit: 'page[limit]',
    pageOffset: 'page[offset]'
  };

  const queryParams = Object.keys(params)
    .map((paramKey: string, index: number) => 
      `${keys[paramKey as keyof RentalsConfig]}=${params[paramKey as keyof RentalsConfig]}`
    )
    .join('&');
  let query = `https://search.outdoorsy.com/rentals${queryParams ? `?${queryParams}` : ''}`;

  const response = await axios.get(query, { signal });
  return response.data;
}