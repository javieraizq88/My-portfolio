import React, { } from 'react';
import data from "../components/data.js";
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';
// falta:
// - Agregar key de proyecto buscador de peliculas y pantallaso
// - Arreglar github de https://github.com/javieraizq88/SimpleCounterWithReact

const Home = props => {
    return (
        <>
            <Navbar />
            <div id="home">

                {/* banner */}
                <div id="banner">
                    <h1>&lt; JIM &gt;</h1>
                    <h3>Full Stack Development</h3>
                </div>

                <br />
                <br />

                <div className="row" id="project">
                    <div className="col-md-1"></div>
                    <div id="titulo-projects" className="col-md-10 col-xs-10 mr-2 mb-4">
                        <h2>Proyectos</h2>
                        <hr />
                        <div id="carouselExampleIndicators" class="carousel slide pb-5 mb-5" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item {ACTIVE_CAROUSEL_AGRADECIMIENTO}">
                            <div class="card-body">
                                <h4 class="c-gray">
                                    Agradezco a juan        </h4>
                                <div class=" d-flex">
                                    <div class="pl-2 c-gray agradecimiento__mensaje" height="100px">
                                        <p>hola</p>
                                    </div>
                                </div>
                                <div class="text-right d-flex jc-fe">
                                    <p class="text--small mb-0">De mi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


                        <div className="card-group">
                            <div className="col-md-11">
                                {data.map(proyecto => {
                                    return (
                                        <div className="card mb-3" id="card-home" >
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img
                                                        src={proyecto.imagen}
                                                        id="imagen1"
                                                        className="card-img"
                                                        alt="Imagen proyecto" />

                                                </div>
                                                <div className=" col-md-8">
                                                    <div className="ml-3 card-body">
                                                        <h4 className="card-header text-center">
                                                            {proyecto.nombre} </h4>
                                                        <br />
                                                        <h5 className="card-text">
                                                            Tecnologías y Lenguajes:
                                                        </h5>
                                                        <p className="card-text">
                                                            {proyecto.tecnology}
                                                        </p>
                                                        <div className="mr-5 ml-5 justify-content-between d-flex" >
                                                            <a href={proyecto.pagina}>
                                                                <h6> Ver proyecto</h6>
                                                            </a>
                                                            {/* <a href={proyecto.pagina}>
                                                                <h6> Ver proyecto </h6>
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })} {/* Fin del mapeo */}
                            </div>


                        </div>
                    </div>
                </div>


                {/* Page Content */}
                <div id="container-contacto" className="row">
                    <div className="col-md-1"></div>

                    <div className="col-md-10 col-xs-10 mr-2 mt-5 mb-5">
                        <div className="card-header mt-3">
                            <h2>Contacto</h2>
                        </div>

                        <hr />
                        <address>
                            <p className="ml-3" ><strong>Javiera Izquierdo Martino</strong></p>
                            <p className="ml-3">
                                <i class="fas fa-envelope ml-5 mr-2"></i>
                                javieraizquierdo7@gmail.com
                            </p>
                            <p className="ml-3">
                                <i class="fas fa-phone-square ml-5 mr-2"></i>
                                + 56 9 9345 8208
                            </p>
                            <p className="ml-3">
                                <a href="https://github.com/javieraizq88">
                                    <i class="fab fa-github ml-5 mr-2"></i>
                                    javieraizq88
                                </a>
                            </p>
                            <p className="ml-3">
                                <a href="https://www.linkedin.com/in/javiera-izquierdo-martino-b9173697/">
                                    <i class="fab fa-linkedin ml-5 mr-2"></i>
                                    Javiera Izquierdo
                                </a>
                            </p>
                            <br />
                        </address>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;  