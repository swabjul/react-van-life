import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const {van} = useOutletContext()
  console.log(van)
  return (
    <figure className="photos">
      <img src={van.imageUrl} alt={`Image of ${van.name}`} />
    </figure>
  )
}