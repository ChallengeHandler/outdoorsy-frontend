import { ImageMeta, RentalsMeta } from "./metas";
import { Rental } from "./rentals";

export interface RentalsResponse {
  data: Rental[],
  included: ImageMeta[],
  meta: RentalsMeta,
  suggestions: any
}