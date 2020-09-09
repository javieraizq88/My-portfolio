import React from "react"
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";


const Navbar = props => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <img
                    className="ml-5"
                    src={logo} id="logo"
                    alt="JIM Logo"
                />
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse mr-5"
                    id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cv">CV</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default Navbar