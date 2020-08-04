import React, { useContext } from "react"
import { Context } from "../../store/appContext"
import HeaderEncuesta from "./headerEnc"
import { Link } from "react-router-dom"

const FinalizarEncuesta = props => {
    const { store, actions } = useContext(Context)

    console.log("nombre: " + store.name)
    console.log("edad: " + store.age)
    console.log(store.respuesta)

    return (
        <>
            <div id="fondo-encuesta" >
                <div className="card-group ">
                    <div className=" card-body col-md-1 col-xs-1"></div>
                    <div className="card-body col-md-10 col-xs-10"
                        id="container1">
                        <HeaderEncuesta />
                        <h2
                            id="subtitulo-finalizar">
                            Muchas gracias por completar la encuesta
                </h2>
                        <Link
                            id="boton-volver-home"
                            to="/">
                            <button
                                type="button"
                                className="btn btn-success">
                                Volver a pagina de JIM
                        </button>
                        </Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export default FinalizarEncuesta