import { ImageData, RentalsMeta } from "./metas";
import { Rental } from "./rentals";

export interface RentalsResponse {
  data: Rental[],
  included: ImageData[],
  meta: RentalsMeta,
  suggestions: any
}