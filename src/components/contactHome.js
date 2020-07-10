import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";


const Contact = props => {
    return (
        <>

            {/* Navbar */}
            <br />
            <br />

            <div className="row" id="contact">
                <div className="col-md-1"></div>
                <div id="titulo-projects" className="col-md-10 col-xs-10 mr-2 mb-4">
                    <h1>Contacto</h1>
                    <hr />

                    <div className="ml-5 mt-4">
                        <h2 className="ml-3" id="p-Home"><strong>Javiera Izquierdo Martino</strong></h2>
                        <h2 className="ml-3" title="Phone" id="p-Home">Teléfono: (+56) 99 345 8208</h2>
                        <h2 className="ml-3" title="Email" id="p-Home">Email:<a href="mailto:javieraizquierdo7@gmail.com">  javieraizquierdo7@gmail.com</a></h2>
                        <br />
                    </div>


                </div>
            </div>




        </>
    )
}

export default Contact;  