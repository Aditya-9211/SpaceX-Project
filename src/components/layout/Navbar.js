import { NavLink } from "react-router-dom"


const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-primary fw-bold">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="dashboard">SPACEX</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="launches">All Launches</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="status">Status Overview</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="navigation">Navigation</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar