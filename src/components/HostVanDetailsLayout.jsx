import { Outlet, useParams, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HostVanDetailsLayout() {

  const [van, setVan] = useState(null)

  const param = useParams()


  useEffect(() => {
    fetch(`/api/host/vans/${param.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans[0]))
},[param])


  return (
    van ? (

      <div className="host-van-details--container">
        <Link className="arrow-back" to=".." relative="path">Back to all vans</Link>


        <div className="host-van-details-info--container">
          <section>
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <div className="host-van-details--text">
              <i className={`vans--type ${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</i>
              <h2>{van.name}</h2>
              <p>{`$${van.price}`}<span>/day</span></p>
            </div>
          </section>
          <nav className="host-van-details--nav">
            <NavLink to={`.`} end >Details</NavLink>
            <NavLink to="pricing">Pricing</NavLink>
            <NavLink to="photos">Photos</NavLink>
          </nav>
          <Outlet context={{van}} />
        </div>

      </div>
    ) :
    <h2>Loading...</h2>
  )
}