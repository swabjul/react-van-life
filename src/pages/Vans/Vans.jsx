import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import "../../api/server.js"

export default function Vans() {

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[])

  const displayedVans = typeFilter
    ? vans.filter( van => van.type === typeFilter)
    : vans

  const vansElements = displayedVans.map(van => {
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

  function generateSearchParams(key, value) {
    const sp = new URLSearchParams(searchParams)

    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }

    return `?${sp.toString()}`
  }


  return (
    <div className="vans-page--container">
      <h1 className="vans--title">Explore our van options</h1>
      <div className="van-page--filter-buttons">
        <Link 
          className={`filter-btn simple ${typeFilter === "simple" ? "selected" : null}`}
          to={generateSearchParams("type", "simple")}
        >
          Simple
        </Link>
        <Link
          className={`filter-btn luxury ${typeFilter === "luxury" ? "selected" : null}`}
          to={generateSearchParams("type", "luxury")}
        >
          Luxury
        </Link>
        <Link
          className={`filter-btn rugged ${typeFilter === "rugged" ? "selected" : null}`}
          to={generateSearchParams("type", "rugged")}
        >
          Rugged
        </Link>
        { typeFilter ? (
            <Link
              className="clear-btn"
              to={generateSearchParams("type", null)}
            >
              Clear filters
            </Link>
          ) : nullg
        }
      </div>



      <div className="vans--list">
        {vansElements}
      </div>
    </div>
  )
}