import { Link, Outlet, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";

export default function HostLayout() {
  const location = useLocation();
  const [activePath, setActivePat] = useState(location.pathname)

  useEffect(() => {
    setActivePat(location.pathname)
  },[location])


  console.log(location)

  return (
    <>
      <nav className="host--nav">
        <Link to="/host" className={activePath === "/host" ? "active" : ""}>Dashboard</Link>
        <Link to="/host/income" className={activePath === "/host/income" ? "active" : ""}>Income</Link>
        <Link to="/host/reviews" className={activePath === "/host/reviews" ? "active" : ""}>Reviews</Link>
      </nav>
      <Outlet />
    </>
  )


}