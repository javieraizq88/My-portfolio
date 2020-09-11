import React, {  } from 'react';
import data from "../components/data.js";
import { Link } from 'react-router-dom';
// falta:
// - Arreglar imagenes de starwars
// - Agregar key de proyecto buscador de peliculas y pantallaso
// - Arreglar github de https://github.com/javieraizq88/SimpleCounterWithReact
// - Arreglar link q une una pagina con otra en https://github.com/javieraizq88/instagram-photo-feed-con-bootstrap y width
// - Arreglar npm run build semaforo 

const Home = props => {


    return (
        <>
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

                        <div className="card-group">
                            <div className="col-md-11">
                                {data.map(proyecto => {
                                    return (
                                        <div className="card mb-3" id="card-home" >
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img
                                                        src="data:image/jpeg;base64,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"
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
                                                            <a href={proyecto.github}>
                                                                <h6> Proyecto en Github</h6>
                                                            </a>
                                                            <a href={proyecto.pagina}>
                                                                <h6> Ver proyecto </h6>
                                                            </a>
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