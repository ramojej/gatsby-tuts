import React from "react"
import SingleTour from "./SingleTour"

const Tours = ({ tours }) => {
  console.log(tours)
  return (
    <div>
      This is tours component
      <SingleTour></SingleTour>
    </div>
  )
}

export default Tours
