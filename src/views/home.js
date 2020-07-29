import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";
import Footer from '../components/footer';
import Navbar from '../components/navbar';

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
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cv">CV</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projectos</Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contacto</Link>
                        </li> */}
                        </ul>
                    </div>
                </nav>

                {/* banner */}
                <div id="banner">
                    <h1>&lt; JIM &gt;</h1>
                    <h3>Full Stack Development</h3>
                </div>


                {/* Page Content */}
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-6 col-xs-6 mr-2 mt-5 mb-5">
                        <h1>What We Do</h1>
                        <hr />
                        <p className=" text-justify" id="p-Home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                        <p className=" text-justify" id="p-Home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                        <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
                    </div>
                    <div className="col-md-4 col-xs-4 ml-5 mt-5 mb-5">
                        <h1 >Contacto</h1>
                        <hr />
                        <address>
                            <p className="ml-3" id="p-Home"><strong>Javiera Izquierdo Martino</strong></p>
                            <h5 className="ml-3"> <i class="fas fa-envelope ml-5"></i>   javieraizquierdo7@gmail.com</h5>
                            <h5 className="ml-3">  <i class="fas fa-phone-square ml-5 "></i> + 56 9 9345 8208</h5>
                            <h5 className="ml-3"> <i class="fab fa-github ml-5 mr-2"></i> javieraizq88</h5>
                            <h5 className="ml-3"><i class="fab fa-linkedin ml-5 mr-2"></i> Javiera Izquierdo</h5>
                            <br />
                        </address>
                    </div>
                </div>
                {/* /.row */}

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 col-xs-10 mr-2 mt-5 mb-5">
                        <h1>Proyectos</h1>
                        <hr />
                        <div className="card-group">
                            <div className="col-md-4 mb-4">
                                <div
                                    className="card h-100"
                                    id="card-InstagramPost">
                                    <h3
                                        className="card-header"
                                        name="TL"
                                        id="titulo-card"
                                    >Star Wars
                                </h3>
                                    <div className="card-img">
                                        <img
                                            className="card-img-top"
                                            id="card-img-TL"
                                            src="/img/starwars/SW.jpg"
                                            alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-text-projects">
                                            Tecnologías y Lenguajes
                                            </h5>
                                        <ul>
                                            <lo>
                                                HTML 5 - CSS 3 - Bootstrap - JQuery - React.Js -JavaScript - Responsive
                                            </lo>
                                        </ul>
                                        <p className="card-text">(Use Fire Fox to open this projects please)</p>
                                        <h5> Github Project</h5>
                                        <p id="link-github">https://github.com/javieraizq88/TrafficLightWithReact</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link
                                            to="/projects/starwars"
                                            id="boton-ver-proyecto"
                                            className="btn btn-primary"
                                        >
                                            Find Out More!
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img
                                        class="card-img-top"
                                        src="http://placehold.it/300x200"
                                        alt=""
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 2</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a
                                            href="#"
                                            class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 4</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 5</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Project 6</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home;  