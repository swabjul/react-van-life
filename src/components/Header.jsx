import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const activeLink = {
    borderBottom: "2px solid #161616",
    color: "#161616"
  }

  return (
    <header>
      <Link className="header--logo" to="/">#Vanlife</Link>
      <nav className="header--nav">
        <NavLink to="host" style={({isActive}) => isActive ? activeLink : null}>Host</NavLink>
        <NavLink to="about" style={({isActive}) => isActive ? activeLink : null}>About</NavLink>
        <NavLink to="vans" style={({isActive}) => isActive ? activeLink : null}>Vans</NavLink>
      </nav>
    </header>
  )
}