import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function HostVans() {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[])

  const vansElement = vans.map(van => {
    return (
      <Link key={van.id}  to={`/host/vans/${van.id}`}>
        <div className="host-vans--item">

            <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
            <div className="host-vans--info">
              <h3>{van.name}</h3>
              <p>{`$${van.price}/day`}</p>
            </div>
        </div>
      </Link>
    )
  })

  return (
    <div className="host-vans--container">
      <h2>Your listed vans</h2>
      <div className="host-vans--list">
        {vansElement}
      </div>
    </div>
  )
}