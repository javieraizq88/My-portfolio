import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";
import Projects from '../components/projectsHome';

const Home = props => {
    return (
        <>
            <div id="home">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <img className="ml-5" src={logo} id="logo" alt="JIM Logo" />

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
                            <li className="nav-item active">
                                <Link className="nav-link active" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cv">CV</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* banner */}
                <div id="banner">
                    <h1>&lt; JIM &gt;</h1>
                    <h3>Full Stack Development</h3>
                </div>

                <Projects />

                {/* Page Content */}
                <div className="row">
                    <div className="col-md-1"></div>

                    <div id="container-contacto" className="col-md-10 col-xs-10 mr-2 mt-5 mb-5">
                        <div className="card-header mt-3"><h1 >Contacto</h1></div>

                        <hr />
                        <address>
                            <p className="ml-3" id="p-Home"><strong>Javiera Izquierdo Martino</strong></p>
                            <h5 className="ml-3">
                                <i class="fas fa-envelope ml-5"></i>
                                javieraizquierdo7@gmail.com
                            </h5>
                            <h5 className="ml-3">
                                <i class="fas fa-phone-square ml-5 "></i>
                                + 56 9 9345 8208
                            </h5>
                            <h5 className="ml-3">
                                <a href="https://github.com/javieraizq88">
                                    <i class="fab fa-github ml-5 mr-2"></i>
                                    javieraizq88
                                </a>
                            </h5>
                            <h5 className="ml-3">
                                <a href="https://www.linkedin.com/in/javiera-izquierdo-martino-b9173697/">
                                    <i class="fab fa-linkedin ml-5 mr-2"></i>
                                    Javiera Izquierdo
                                </a>
                            </h5>
                            <br />
                        </address>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;  