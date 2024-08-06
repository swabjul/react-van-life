import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../../api/server.js"

export default function Vans() {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[])


  const vansElements = vans.map(van => {
    const  type = van.type.charAt(0).toUpperCase() + van.type.slice(1)
    return (
      <div key={van.id} className="vans--tile">
        <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, price at ${van.price} per day`}>
          <img className="vans--image" src={van.imageUrl} alt={`Image of ${van.name}`} />
          <div className="vans--info">
            <h2 className="vans--name">{van.name}</h2>
            <p className="vans--price">${van.price}<span>/day</span></p>
          </div>
          <i className={`vans--type ${van.type}`}>{type}</i>
        </Link>

      </div>
    )

  })

  return (
    <div className="vans-page--container">
      <h1 className="vans--title">Explore our van options</h1>
      <div className="vans--list">
        {vansElements}
      </div>
    </div>
  )
}