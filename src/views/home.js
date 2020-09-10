import React, {  } from 'react';
import data from "../components/data.js";
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
                                                            <a href={proyecto.github}>
                                                                <h6> Proyecto en Github</h6>
                                                            </a>
                                                            <span id="link-boton">
                                                                <a
                                                                    href={proyecto.pagina}
                                                                    
                                                                    id="boton-ver-proyecto"
                                                                    className="btn btn-primary">
                                                                    VER MAS
                                                                </a>
                                                            </span>
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