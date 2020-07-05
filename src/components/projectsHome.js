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
                <div id="titulo-projects" className="col-md-10 col-xs-10 mr-2 mb-4">
                    <h1>Projects</h1>
                    <hr />
                    <div className="card-group">

                        {/* Star Wars */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Star Wars</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/starwars/SW.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - React.Js -JavaScript - Responsive
                                        </lo>
                                    </ul>
                                    <p className="card-text">(Use Fire Fox to open this projects please)</p>
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/TrafficLightWithReact</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/starwars" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>


                        {/* Tic Tac Toe */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Tic-Tac Toe</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/tic-tac-toe/gato.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - React.Js -JavaScript
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/ticTacToeWithReact</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/tic-tac-toe" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>

                        {/* Traffic Light */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Traffic Light</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/traffic-light/TL-imagen.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - React.Js -JavaScript
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/TrafficLightWithReact</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/traffic-light" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>

                        {/* Random card */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Random Card</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/random-card/RC.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - JavaScript - Bootstrap 
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/RandomCardDealer-generator-</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/ExcuseGenerator" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>

                        {/* Random card */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Random Card</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/random-card/RC.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - JavaScript - Bootstrap 
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/RandomCardDealer-generator-</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/ExcuseGenerator" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>

                        {/* Excuse Generator */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Excuse Generator</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/excuse-generator/EG.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - JavaScript - Bootstrap 
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/ExcuseGenerator</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/ExcuseGenerator" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>

                          {/* Instagram photo feed */}
                          <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Instagram Photo Feed</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/IPF/IPF.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap 
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/instagram-photo-feed-con-bootstrap</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/instagram-photo-feed" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>

                        {/* Instagram Post */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="IP" id="titulo-card">Instagram Post</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/instagram-post/IP.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/InstagramPost</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/instagram-post" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
                                </div>
                            </div>
                        </div>

                        {/* Digital Postcard */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="IP" id="titulo-card">Digital Postcard</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/digital-postcard/DP.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnology and Lenguages</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3
                                        </lo>
                                    </ul>
                                    <br />
                                    <h5> Github Project</h5>
                                    <p id="link-github">https://github.com/javieraizq88/digital-postcard</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/digital-postcard" id="boton-ver-proyecto" className="btn btn-primary">Find Out More!</Link>
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