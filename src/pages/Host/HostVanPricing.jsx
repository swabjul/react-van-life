import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
  const {van} = useOutletContext()

  return (
    <h3 className="price">${van.price}<span>/day</span></h3>
  )
}