import { useOutletContext } from "react-router-dom"

export default function HostVanDetails() {
  const {van} = useOutletContext();

  console.log(van.id)

  return (
    <>
      <h3>
        <span className="title">Name: </span>
        <span className="details">{van.name}</span>
      </h3>
      <h3>
        <span className="title">Category: </span>
        <span className="details">{van.type[0].toUpperCase() + van.type.slice(1)}</span>
      </h3>
      <h3>
        <span className="title">Description: </span>
        <span className="details">{van.description}</span>
      </h3>
      <h3>
        <span className="title">Visibility: </span>
        <span className="details">Public</span>
      </h3>
    </>
  )
}