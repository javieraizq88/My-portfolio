import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";
import Navbar from './navbar';


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
                    <h1>Estos son algunos de mis proyectos</h1>
                    <hr />
                    <div className="card-deck">

                        {/* Star Wars */}
                        <div className=" col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Star Wars</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/starwars/SW.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - JQuery - React.Js - API Rest - JavaScript - Responsive
                                        </lo>
                                    </ul>
                                    <p className="card-text">(Use Fire Fox to open this projects please)</p>
                                    <a href="https://github.com/javieraizq88/TrafficLightWithReact">  <h5> Proyecto en Github</h5></a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/starwars" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Ahorcado */}
                        <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Jugar ahorcado</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/ahorcado.jpg" alt="" />
                                </div>
                                <div id="projects-card-body" className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Angular - Typescript
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/Ahorcardo-angular">   <h5> Proyecto en Github</h5></a>
                                </div>

                            </div>
                        </div>

                        {/* Encuesta */}
                        <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Formulario</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/encuesta/E.jpg" alt="" />
                                </div>
                                <div id="projects-card-body" className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - JQuery - React.Js -JavaScript
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/formulario-jun-2020">   <h5> Proyecto en Github</h5></a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/encuesta" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* battleship */}
                        <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Battleship</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/battleship.jpg" alt="" />
                                </div>
                                <div id="projects-card-body" className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - JavaScript
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/battleship">   <h5> Proyecto en Github</h5></a>
                                </div>

                            </div>
                        </div>

                        {/* Simple Counter */}
                        <div  className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Contador simple</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/simpleCounter.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - JQuery - React.Js -JavaScript
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/SimpleCounterWithReact"> <h5> Proyecto en Github</h5></a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/simplecounter" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>


                        {/* Tic Tac Toe */}
                        <div  className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Tic-Tac Toe</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/tic-tac-toe/gato.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - JQuery - React.Js -JavaScript
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/ticTacToeWithReact"> <h5> Proyecto en Github</h5></a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/tic-tac-toe" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Bubble sort */}
                        <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Bubble sort</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/Bubble-sort.jpg" alt="" />
                                </div>
                                <div id="projects-card-body" className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - JavaScript - Git
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/SortingCardsWithBubble">   <h5> Proyecto en Github</h5></a>
                                </div>

                            </div>
                        </div>

                        {/* To do List */}
                        <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Lista de tareas</h3>
                                <div className="card-img">
                                    <img className="card-img-top " id="card-img-TL" src="/img/TodoList.jpg" alt="" />
                                </div>
                                <div id="projects-card-body" className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - React.js - Bootstrap - JQuery - JavaScript - Git
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/ToDoListConReact">   <h5> Proyecto en Github</h5></a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/todolist" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Traffic Light */}
                        <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Traffic Light</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/traffic-light/TL-imagen.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - JQuery - React.Js -JavaScript
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/TrafficLightWithReact"> <h5> Proyecto en Github</h5> </a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/traffic-light" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Random card */}
                        <div className="  col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Random Card</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/random-card/RC.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/RandomCardDealer-generator-">
                                        <h5> Proyecto en Github</h5>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/RandomCard" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Excuse Generator */}
                        <div className=" col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Excuse Generator</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/excuse-generator/EG.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - JavaScript - Bootstrap - JQuery
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/ExcuseGenerator">
                                        <h5> Proyecto en Github</h5>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/ExcuseGenerator" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Instagram photo feed */}
                        <div  className=" col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="TL" id="titulo-card">Instagram Photo Feed</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/IPF/IPF.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3 - Bootstrap - JQuery
                                        </lo>
                                    </ul>
                                    <br />
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/instagram-photo-feed-con-Bootstrap">
                                        <h5> Proyecto en Github</h5>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/instagram-photo-feed" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Instagram Post */}
                        <div className=" col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="IP" id="titulo-card">Instagram Post</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/instagram-post/IP.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <a href="https://github.com/javieraizq88/InstagramPost">
                                        <h5> Proyecto en Github</h5>
                                    </a>
                                    <br />
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/instagram-post" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
                                </div>
                            </div>
                        </div>

                        {/* Digital Postcard */}
                        <div className=" col-md-4 col-sm-6 col-xs-6 mb-4">
                            <div className="card h-100" id="card-InstagramPost">
                                <h3 className="card-header" name="IP" id="titulo-card">Digital Postcard</h3>
                                <img className="card-img-top" id="card-img-TL" src="/img/digital-postcard/DP.jpg" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text-projects">Tecnologías y Lenguajes</h5>
                                    <ul>
                                        <lo>
                                            HTML 5 - CSS 3
                                        </lo>
                                    </ul>
                                    <p className="card-text text-white"> a</p>
                                    <br />
                                    <a href="https://github.com/javieraizq88/digital-postcard">
                                        <h5> Proyecto en Github</h5>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <Link to="/projects/digital-postcard" id="boton-ver-proyecto" className="btn btn-primary">VER MAS</Link>
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