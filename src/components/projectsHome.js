import React from 'react';
import { Link } from 'react-router-dom';


const Projects = props => {
    return (
        <>

            {/* Navbar 
            <Navbar /> */}

            <br />
            <br />

            <div className="row" id="project">
                <div className="col-md-1"></div>
                <div id="titulo-projects" className="col-md-10 col-xs-10 mr-2 mb-4">
                    <h2>Proyectos</h2>
                    <hr />

                    {/* Star Wars */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/starwars/SW.jpg" id="imagen1" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Star Wars</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery - React.Js - API Rest - Responsive
                                        </p>
                                    <p className="card-text">(Use Fire Fox para abrir este proyecto)</p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/starWars">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/starwars" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ahorcado */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/ahorcado.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Jugar ahorcado</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - Angular - Typescript
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/Ahorcardo-angular">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Encuesta */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/encuesta/E.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Formulario con validación</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery - React.Js
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/formulario-jun-2020">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/encuesta" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* battleship */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/battleship.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Battleship</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript Vanilla
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/battleship">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple Counter */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/simpleCounter.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Contador simple</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery - React.Js
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="htps://github.com/javieraizq88/SimpleCounterWithReactt">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/simplecounter" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tic Tac Toe */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/tic-tac-toe/gato.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Tic-Tac Toe</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery - React.Js
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/ticTacToeWithReact">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/tic-tac-toe" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bubble sort */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/Bubble-sort.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Bubble sort</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript Vanilla
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/SortingCardsWithBubble">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* To do List */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/TodoList.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Lista de tareas</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery - React.Js
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/ToDoListConReact">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/todolist" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Traffic Light */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/traffic-light/TL-imagen.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Semáforo</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery - React.Js
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/TrafficLightWithReact">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/traffic-light" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Random card */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/random-card/RC.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Random Card</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/RandomCardDealer-generator-">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/RandomCard" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Excuse Generator */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/excuse-generator/EG.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Generador de excusas</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/ExcuseGenerator">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/ExcuseGenerator" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Instagram photo feed */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/IPF/IPF.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Instagram Photo Feed</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3 - Bootstrap - JQuery
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/instagram-photo-feed-con-Bootstrap">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/instagram-photo-feed" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Instagram Post */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/instagram-post/IP.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Instagram Post</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/InstagramPost">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/instagram-post" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Digital Postcard */}
                    <div className="col-md-10 card mb-3" id="card-home" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/img/digital-postcard/DP.jpg" id="imagen" className="card-img" alt="..." />
                            </div>
                            <div className=" col-md-8">
                                <div className="ml-3 card-body">
                                    <h4 className="card-header text-center">Digital Postcard</h4>
                                    <br />
                                    <h5 className="card-text">
                                        Tecnologías y Lenguajes:
                                        </h5>
                                    <p className="card-text">
                                        HTML 5 - CSS 3
                                        </p>
                                    <div className="mr-5 ml-5 justify-content-between d-flex" >
                                        <a href="https://github.com/javieraizq88/digital-postcard">
                                            <h5> Proyecto en Github</h5>
                                        </a>
                                        <span id="link-boton">
                                            <Link to="/projects/digital-postcard" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                        </span>
                                    </div>
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