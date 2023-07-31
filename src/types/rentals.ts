import { GeneralMeta, ImageMeta } from "./metas"

export interface Review {
  key: string,
  name: string,
  percentage: number,
  score: number
}

export interface RentalAttributes {
  Explanation: any,
  FeaturesMap: any,
  active_options: {
    cancel_policy: string,
    cancel_policy_combo_bookings: string,
    date: string,
    instant_book: boolean,
    minimum_days: number,
    monthly_discount_percentage: number,
    monthly_rate_per_day: number,
    price_per_day: number,
    price_per_month: number,
    price_per_week: number,
    tax: number,
    use_day_pricing: boolean,
    use_tax_inclusive_pricing: boolean,
    weekly_discount_percentage: number,
    weekly_rate_per_day: number,
  },
  availability_set: boolean,
  average_ratings: {
    cleanliness_score: number,
    cleanliness_score_percentage: number,
    communication_score: number,
    communication_score_percentage: number,
    listing_score: number,
    listing_score_percentage: number,
    mechanical_score: number,
    mechanical_score_percentage: number,
    score: number,
    score_percentage: number,
    value_score: number,
    value_score_percentage: number
  },
  average_reviews: {
    owner: Review[],
    rental: Review[],
    score: number
  },
  cancel_policy: string,
  cancel_policy_combo_bookings: string,
  cancel_text: string,
  catalog: any,
  check_in: number,
  check_out: number,
  children_count: number,
  coachnet_ready: boolean,
  coachnet_required: boolean,
  combined_special_hours: any[],
  created: string,
  current_location_id: number,
  custom_insurance_text: string,
  dealer: boolean,
  delivery: boolean,
  delivery_radius: number,
  delivery_usage_item_id: number,
  deposit_percentage: number,
  description: string,
  description_included: string,
  description_other: string,
  description_recommendations: string,
  display_vehicle_type: string,
  distributed_ratings: {
    score: {
      r1: number,
      r2: number,
      r3: number,
      r4: number,
      r5: number,
    }
  },
  education: any[],
  external: boolean,
  favorite: boolean,
  favorite_count: number,
  // ...
}

export interface Rental {
  attributes: RentalAttributes,
  id: string,
  relationships: {
    images: {
      data: ImageMeta[]
    },
    mileage_usage_item: {
      data: GeneralMeta,
    },
    owner: {
      data: GeneralMeta,
    },
    primary_image: {
      data: ImageMeta,
    },
  },
  type: string,
}

export type RentalsConfig = {
  filter?: string,
  pageLimit?: number,
  pageOffset?: number
}