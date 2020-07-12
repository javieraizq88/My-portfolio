import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";
import Navbar from './navbar';


const Services = props => {
    return (
        <>
            {/* Navbar */}
<Navbar />

            <br />
            <br />

            <div className="row" id="servicies">
                <div className="col-md-1"></div>
                <div id="titulo-projects" className="col-md-10 col-xs-10 mr-2 mb-4">
                    <h1>Servicios</h1>
                    <hr />

                    <br />
                    <br />
                    <br />
                    <div className="card-group">
                        <div className="col-md-1  mb-4"></div>
                        <div className="col-md-10  mb-4">
                            <div className="card h-100" id="card-servicios">
                                <h2 className="card-header" name="IP" id="titulo-card">Desarrollo de páginas web</h2>
                                <div className="card-body">
                                    <h3 className="card-text-projects">Tecnologías y lenguajes</h3>
                                    <br />
                                    <h5 className="ml-5">
                                        <strong> FRONT END:</strong> HTML 5 - CSS 3 - Bootstrap - JQuery - React.Js -JavaScript
                                </h5>
                                    <br />
                                    <h5 className="ml-5">
                                        <strong> BACK END:</strong> Python
                                </h5>

                                    <br />
                                    <h5 className="ml-5">
                                        <strong> BASE DE DATOS:</strong> SQLite
                                </h5>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>




        </>
    )
}

export default Services;  