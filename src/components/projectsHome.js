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


            <div className="row" id="project">
                <div className="col-md-1"></div>
                <div className="col-md-10 col-xs-10 mr-2 mt-5 mb-5">
                    <h1>Projects</h1>
                    <hr />
                    <div className="card-group">
                        <div className="col-md-4 mb-5">
                            <div className="card h-100" id="card-starwars">
                                <h3 className="card-header " id="titulo-card-project">Starwars</h3>
                                <div className="card-body">
                                    <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                                    <br />
                                    <br />
                                    <h5 className="card-text">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 -
                                            CSS 3 -
                                            Bootstrap  -
                                            React.Js  -
                                            JavaScript -
                                            API  -
                                            J Query
                                        </lo>
                                    </ul>
                                    <p className="card-text">(Use Fire Fox to open this projects please)</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/starwars" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Tic-tac-toe</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div className="card-footer">
                                <Link to="/projects/tic-tac-toe" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Project 3</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Project 4</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Project 5</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Project 6</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
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