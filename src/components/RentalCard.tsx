import { FC } from "react";
import { ImageBase } from "../hooks/useRentals";
import { Rental } from "../types/rentals";

type RentalCardProp = {
  data: Rental,
  imageBase: ImageBase
}
const RentalCard: FC<RentalCardProp> = ({ data, imageBase }) => {
  const imageId = data.relationships.primary_image.data.id;

  return <div className="flex items-center w-3/5">
    <img
      className="rounded-xl object-cover h-40 w-1/4 m-8"
      src={imageBase[imageId].url}
    />
    <span className="font-sans text-2xl text-slate-600 font-medium whitespace-normal">{data.attributes.name}</span>
  </div>
}

export { RentalCard };