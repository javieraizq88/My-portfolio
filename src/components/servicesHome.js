import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";


const Services = props => {
    return (
        <>
            {/* Navbar */}
            <br />
            <br />

            <div className="row" id="servicies">
                <div className="col-md-1"></div>
                <div id="titulo-projects" className="col-md-10 col-xs-10 mr-2 mb-4">
                    <h1>Servicios</h1>
                    <hr />

                    {/* Digital Postcard */}
                    <div className="col-md-10 ml-5 mb-4">
                        <div className="card h-100" id="card-InstagramPost">
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
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

            </div>




        </>
    )
}

export default Services;  