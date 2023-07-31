export interface GeneralMeta {
  id: string,
  type: string,
}

export type ImageMeta = GeneralMeta;

export interface ImageAttributes {
  amenity: any,
  best: boolean,
  category: { name: string, slug: string },
  description: string,
  position: number,
  primary: boolean,
  rental_id: number,
  review: any,
  skip_enhance: boolean,
  status: string,
  tags: "",
  url: string,
  video: boolean,
}

export interface ImageData extends ImageMeta {
  attributes: ImageAttributes
}

export interface VehicleType {
  label: string,
  style: string,
  type: string,
}

export interface RentalsMeta {
  city: string,
  country: string,
  country_code: string,
  country_name: string,
  experiments: any,
  experiments_data: any,
  flexible_dates: any,
  is_blended: boolean,
  lat: number,
  lng: number,
  locale: string,
  price_average: number,
  price_histogram: {
    data: number[],
    max_value: number,
  },
  price_max: number,
  price_median: number,
  price_min: number,
  radius: number,
  request: any,
  start_position: number,
  state: string,
  stop_position: number,
  suggested: boolean,
  total: number,
  total_unavailable: number,
  vehicle_types: VehicleType[]
}