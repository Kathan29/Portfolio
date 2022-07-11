import { Link } from "react-router-dom";


export default function Navbar()
{
    return(
        <>
        
        <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand" aria-current="page" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      
        <Link className="nav-link" to="/resume">Resume</Link>
        <Link className="nav-link" to="/project">Project</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        
      </div>
    </div>
  </div>
</nav>

        </>
    )
}