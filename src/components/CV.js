import React from "react"
import { Link } from "react-router-dom"

const CV = props => {
    return (
        <>
            <br />
            <br />
            <br />
            <div className="card-body " id="CV">
                <h1 id="titulo-CV">Javiera Ignacia Izquierdo Martino</h1>

                <div id="contacto-CV">
                    <p className="ml-3" id="p-Home">
                        <i class="fas fa-envelope mr-2"></i>   javieraizquierdo7@gmail.com
                        <i class="fas fa-phone-square ml-5 "></i> + 56 9 9345 8208
                        <i class="fab fa-github ml-5 mr-2"></i> javieraizq88
                        <i class="fab fa-linkedin ml-5 mr-2"></i> Javiera Izquierdo
                    </p>
                </div>
                <br />

                <div id="resumen-CV">
                    <h3>RESUMEN</h3>
                    <hr />
                    <h5>Nutricionista de la Universidad Mayor y Desarrolladora web Full-Stack de 4Geeks Academy, Soy proactiva, responsable y comprometida, empática, trabajo bien en equipo, resiliente, creativa y honesta. Actualmente quiero continuar con mi aprendizaje y demostrar mis habilidades en el área de desarrollo web usando mis conocimientos y habilidades adquiridas tanto en programación como en el área de la salud. </h5>
                </div>
                <br />
                <br />
                <br />

                <div id="antecAc-CV">
                    <h3>ANTECEDENTES ACADÉMICOS</h3>
                    <hr />
                    <h5> <span id="fecha">02/2020 – 05/2020 </span> 4Geeks Academy, Desarrolladora de Software Full Stack Junior</h5>
                    <h5> <span id="fecha1">03/2007 – 12/2013 </span> Universidad Mayor, Nutricionista</h5>
                </div>

                <br />
                <br />
                <br />

                <div id="proyectos-CV">
                    <h3>PROYECTOS</h3>
                    <hr />
                    <h5> <span id="fecha">04/2020 – 05/2020 </span> <strong>Fit Good</strong>
                        <br />
                        <div id="descripcion-proyecto-CV">Trabajo final del curso de Desarrollador de Software Full Stack Junior. Diseño, desarrollo e implementación de la aplicación web desde su inicio usando para el Front-End HTML5, CSS3, Webpack, JS y React.Js, para el Back-End se utilizó Python y Flask y se hizo una REST API que permite crear planes de clientes para ser evaluado y contactado por nutricionista y personal trainer </div>
                        <div  id="descripcion-proyecto-CV"> <strong>Battleship game</strong>, Tecnologías: HTML, CSS, JS </div>
                        <div id="descripcion-proyecto-CV"> <strong>Contact List</strong>, Tecnologías: HTML, CSS, JS, React.Js y React Router </div>
                        <div id="descripcion-proyecto-CV"> <strong>Star Wars web page</strong>, Tecnologías: HTML, CSS, JS, React.Js, React Router </div>
                    </h5>
                </div>

                <br />
                <br />


                <div id="proyectos-CV">
                    <h3>TECNOLOGIAS Y LENGUAJES</h3>
                    <hr />
                    <h5 id="t">
                        <span id="tecn-CV"> HTML </span>
                        <span id="tecn-CV"> CSS </span>
                        <span id="tecn-CV"> JavaScript </span>
                        <span id="tecn-CV"> Bootstrap </span>
                        <span id="tecn-CV"> JQuery </span>
                        <span id="tecn-CV"> Python </span>
                        <span id="tecn-CV"> React.Js </span>
                    </h5>
                    <br />
                    <h5 id="t1">
                        <span id="tecn-CV"> Base de datos </span>
                        <span id="tecn-CV"> API-Rest </span>
                        <span id="tecn-CV"> Webpack </span>
                        <span id="tecn-CV"> Git </span>
                        <span id="tecn-CV"> Flask </span>
                    </h5>
                </div>

                <br />
                <br />
                <br />

                <div id="proyectos-CV">
                    <h3>IDIOMAS</h3>
                    <hr />
                    <h5>
                        <div > <strong>Inglés</strong> (Intermedio)</div>
                    </h5>
                </div>

                <br />
                <br />

                <div id="antecAc-CV">
                    <h3>EXPERIENCIA PROFESIONAL</h3>
                    <hr />
                    <h5> <span id="fecha1">11/2019 – 05/2020 </span> <strong>Qualisur</strong>, Coordinadora de ventas</h5>
                    <h5> <span id="fecha1">08/2015 – 06/2018 </span> <strong>Instituto El Cedro</strong>, Nutricionista</h5>
                    <h5> <span id="fecha1">08/2015 – 06/2018 </span> <strong>Clínica Renacer</strong>, Nutricionista</h5>
                    <h5> <span id="fecha1">12/2014 – 02/2015 </span> <strong>Hospital Lucio Córova</strong>, Nutricionista</h5>
                </div>

                 
 
 
            </div>
        </>
    )
}

export default CV