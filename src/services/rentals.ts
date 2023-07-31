import axios from 'axios';
import { RentalsResponse } from '../types/services';

type GetRentalsProps = {
  filter?: string,
  pageLimit?: number,
  pageOffset?: number
}
type QueryParamKeys = {
  [key: string]: string
}
export const getRentals = async (params: GetRentalsProps): Promise<RentalsResponse> => {
  const keys: QueryParamKeys = {
    filter: 'filter[keywords]',
    pageLimit: 'page[limit]',
    pageOffset: 'page[offset]'
  };

  const queryParams = Object.keys(params)
    .map((paramKey: string, index: number) => 
      `${keys[paramKey as keyof GetRentalsProps]}=${params[paramKey as keyof GetRentalsProps]}`
    )
    .join('&');
  let query = `https://search.outdoorsy.com/rentals${queryParams ? `?${queryParams}` : ''}`;

  const response = await axios.get(query);
  return response.data;
}