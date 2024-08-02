import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function VanDetails() {
  const params = useParams()
  console.log(params)

  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params])

  console.log(van)

  return (
    van ? (
        <div className="van-details--container">
          <Link to="/vans" className="arrow-back">Back to all vans</Link>
          <section className="van-details">
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <div className="van-details--info">
              <i className={`vans--type ${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</i>
              <h2 className="van-details--name">{van.name}</h2>
              <p className="van-details--price">${van.price}<span>/day</span></p>
              <p className="van-details--description">{van.description}</p>
              <Link className="link-button" to="/">Rent this van</Link>
            </div>
          </section>
        </div>
    ) :
    <h2>Loading...</h2>

  )
  //   {van ? (
  //     <div className="van-details--container">
  //     <img src={van.imageUrl} alt={`Image of ${van.name}`} />
  //     {/* <i className={`vans--type ${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</i> */}
  //   </div>
  //   ):
  //   <h2>Loading...</h2>
  // }

}