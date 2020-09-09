import React from "react"

const CV = props => {
    return (
        <>
            <br />
            <br />
            <div className="card-body " id="CV">
                <h2 id="titulo-CV">Javiera Ignacia Izquierdo Martino</h2>

                <div id="contacto-CV">
                    <p className="ml-3" id="p-Home">
                        <i class="fas fa-envelope mr-2"></i>   javieraizquierdo7@gmail.com
                        <i class="fas fa-phone-square ml-5 "></i> + 56 9 9345 8208
                        <a href="https://github.com/javieraizq88" target="_blank">
                            <i class="fab fa-github ml-5 mr-2"></i>
                            javieraizq88
                         </a>
                        <a href="https://www.linkedin.com/in/javiera-izquierdo-martino-b9173697/" target="_blank">
                            <i class="fab fa-linkedin ml-5 mr-2"></i>
                            Javiera Izquierdo
                        </a>
                    </p>
                </div>
                <br />

                <div id="resumen-CV">
                    <h4>RESUMEN</h4>
                    <hr />
                    <h6>Nutricionista de la Universidad Mayor y Desarrolladora web Full-Stack de 4Geeks Academy, Soy proactiva, responsable y comprometida, empática, trabajo bien en equipo, resiliente, creativa y honesta. Actualmente quiero continuar con mi aprendizaje y demostrar mis habilidades en el área de desarrollo web usando mis conocimientos y habilidades adquiridas tanto en programación como en el área de la salud. </h6>
                </div>
                <br />
                <br />

                <div id="antecAc-CV">
                    <h4>ANTECEDENTES ACADÉMICOS</h4>
                    <hr />
                    <h6> <span id="fecha">02/2020 – 05/2020 </span> 4Geeks Academy, Desarrolladora de Software Full Stack Junior</h6>
                    <h6> <span id="fecha1">03/2007 – 12/2013 </span> Universidad Mayor, Nutricionista</h6>
                </div>

                <br />
                <br />

                <div id="proyectos-CV">
                    <h4>PROYECTOS</h4>
                    <hr />
                    <h6> <span id="fecha">04/2020 – 05/2020 </span> <strong>Fit Good</strong>
                        <br />
                        <div id="descripcion-proyecto-CV">Trabajo final del curso de Desarrollador de Software Full Stack Junior. Diseño, desarrollo e implementación de la aplicación web desde su inicio usando para el Front-End HTML5, CSS3, Webpack, JS y React.Js, para el Back-End se utilizó Python y Flask y se hizo una REST API que permite crear planes de clientes para ser evaluado y contactado por nutricionista y personal trainer </div>
                        <div id="descripcion-proyecto-CV"> <strong>Battleship game</strong>, Tecnologías: HTML, CSS, JS </div>
                        <div id="descripcion-proyecto-CV"> <strong>Contact List</strong>, Tecnologías: HTML, CSS, JS, React.Js y React Router </div>
                        <div id="descripcion-proyecto-CV"> <strong>Star Wars web page</strong>, Tecnologías: HTML, CSS, JS, React.Js, React Router </div>
                    </h6>
                </div>

                <br />
                <br />


                <div id="proyectos-CV">
                    <h4>TECNOLOGIAS Y LENGUAJES</h4>
                    <hr />
                    <h6 id="t">
                        <span id="tecn-CV"> HTML </span>
                        <span id="tecn-CV"> CSS </span>
                        <span id="tecn-CV"> JavaScript </span>
                        <span id="tecn-CV"> Bootstrap </span>
                        <span id="tecn-CV"> JQuery </span>
                        <span id="tecn-CV"> Python </span>
                    </h6>
                    <h6 id="t">
                        <span id="tecn-CV"> React.Js </span>
                        <span id="tecn-CV"> API Rest </span>
                        <span id="tecn-CV"> Base de datos </span>
                        <span id="tecn-CV"> API-Rest </span>
                        <span id="tecn-CV"> Webpack </span>
                    </h6>
                    <h6 id="t">
                        <span id="tecn-CV"> Git / GitHub </span>
                        <span id="tecn-CV"> Flask </span>
                    </h6>
                </div>

                <br />
                <br />

                <div id="proyectos-CV">
                    <h4>IDIOMAS</h4>
                    <hr />
                    <h6>
                        <div > <strong>Inglés</strong> (Intermedio)</div>
                    </h6>
                </div>

                <br />
                <br />

                <div id="antecAc-CV">
                    <h4>EXPERIENCIA PROFESIONAL</h4>
                    <hr />
                    <h6> <span id="fecha1">11/2019 – 05/2020 </span> <strong>Qualisur</strong>, Coordinadora de ventas</h6>
                    <h6> <span id="fecha1">08/2015 – 06/2018 </span> <strong>Instituto El Cedro</strong>, Nutricionista</h6>
                    <h6> <span id="fecha1">08/2015 – 06/2018 </span> <strong>Clínica Renacer</strong>, Nutricionista</h6>
                    <h6> <span id="fecha1">12/2014 – 02/2015 </span> <strong>Hospital Lucio Córova</strong>, Nutricionista</h6>
                </div>
            </div>
        </>
    )
}

export default CV