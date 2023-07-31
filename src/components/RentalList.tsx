import { FC } from "react"
import { ImageBase } from "../hooks/useRentals"
import { Rental } from "../types/rentals"
import { RentalCard } from "./RentalCard"

type RentalListProp = {
  rentals: Rental[],
  imageBase: ImageBase
}
const RentalList: FC<RentalListProp> = ({ rentals, imageBase }) => {
  return <div className="flex flex-col items-center">
    {rentals.map(rental => <RentalCard data={rental} imageBase={imageBase} />)}
  </div>
}

export { RentalList };