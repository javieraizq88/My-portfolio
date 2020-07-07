import React from "react"
import HeaderEncuesta from "./headerEnc"
import { Link } from "react-router-dom"

const HomeEncuesta = props => {
    return (
        <> 
        
        <div id="fondo-encuesta">
            <div className="card-group ">
                <div className=" card-body col-md-1 col-xs-1"></div>
                <div className="card-body col-md-10 col-xs-10"
                    id="container1">
                    <HeaderEncuesta />
                    <h2
                        id="subtitulo-home">
                        Para inicar la encuesta, haz click en el siguiente botón
                        </h2>
                    <Link
                        id="boton-home"
                        to="/projects/encuesta/1">
                        <button
                            type="button"
                            className="btn btn-success">
                            Comenzar
                        </button>
                    </Link >
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeEncuesta