import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";


const Contact = props => {
    return (
        <>

            {/* Navbar */}


            <br />
            <br />
            <br />

            <h1 className="ml-5 mt-3">Contact</h1>

            <address className="ml-5 mt-4">
                <p className="ml-3" id="p-Home"><strong>Javiera Izquierdo Martino</strong></p>
                <p className="ml-3" title="Phone" id="p-Home">Phone: (+56) 99 345 8208</p>
                <p className="ml-3" title="Email" id="p-Home">Email:<a href="mailto:javieraizquierdo7@gmail.com">  javieraizquierdo7@gmail.com</a></p>
                <br />
            </address>

        </>
    )
}

export default Contact;  