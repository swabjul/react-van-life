import { Link, Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {


  return (
    <>
      <nav className="host--nav">
        <NavLink
          to="."
          end
          className={({isActive}) => isActive ? "active" : null}>
            Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({isActive}) => isActive ? "active" : null}>
            Income
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({isActive}) => isActive ? "active" : null}>
            Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({isActive}) => isActive ? "active" : null}>
            Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}










// import { Link, Outlet, useLocation } from "react-router-dom"
// import { useEffect, useState } from "react";

// export default function HostLayout() {
//   const location = useLocation();
//   const [activePath, setActivePat] = useState(location.pathname)

//   useEffect(() => {
//     setActivePat(location.pathname)
//   },[location])


//   console.log(location)

//   return (
//     <>
//       <nav className="host--nav">
//         <Link to="/host" className={activePath === "/host" ? "active" : ""}>Dashboard</Link>
//         <Link to="/host/income" className={activePath === "/host/income" ? "active" : ""}>Income</Link>
//         <Link to="/host/reviews" className={activePath === "/host/reviews" ? "active" : ""}>Reviews</Link>
//       </nav>
//       <Outlet />
//     </>
//   )


// }