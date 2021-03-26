import './navbar.css';
import {Link} from 'react-router-dom' 

function Navbar(props) {
    return (
        <div className={"navbar-parent"}>
            <nav className={"navbar navbar-expand-lg navbar-dark bg-dark bg-light"} id='my-navbar'>
                <Link className="navbar-brand" to="/">Pizza Brand</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/pizzaries">Pizzaries</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            {props.children}
        </div>
    )
}

export default Navbar