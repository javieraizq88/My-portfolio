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

            <br />
            <br />


            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 col-xs-10 mr-2 mt-5 mb-5">
                    <h1>Projects</h1>
                    <hr />
                    <div className="card-group">
                        <div class="col-md-4 mb-5">
                            <div class="card h-100">
                                <img class="card-img-top" src="http://placehold.it/300x200" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">Project 1</h4>
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
                                    <h4 class="card-title">Project 2</h4>
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
                                    <h4 class="card-title">Project 3</h4>
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



        </>
    )
}

export default Projects;  