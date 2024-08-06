import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link className="header--logo" to="/">#Vanlife</Link>
      <nav className="header--nav">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}