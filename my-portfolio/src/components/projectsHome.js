import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";


const Projects = props => {
    return (
        <>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <img src={logo} id="logo" alt="JIM Logo" />

                    {/* <a className="navbar-brand" href="#">JIM</a>*/}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

<br/>
<br/>
<br/>

<h1>Projects</h1>



        </>
    )
}

export default Projects;  