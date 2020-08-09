import React from 'react';
import './traffic-light.css';
import { Link } from 'react-router-dom';

class TrafiicLight extends React.Component {
    constructor() {
        super();
        this.state = {
            encendidoRojo: 0,
            encendidoAmarillo: 0,
            encendidoVerde: 0,
        }
    }

    cambiarLuz = (e) => {
        if (e.target.id === "redLight" && this.state.encendidoRojo === 0 && this.state.encendidoAmarillo === 0 && this.state.encendidoVerde === 0) {
            e.target.classList.remove("alert-danger");
            e.target.classList.add("bg-danger")
            this.setState({
                encendidoRojo: 1
            })
        } else if (e.target.id === "redLight" && this.state.encendidoRojo === 1 && this.state.encendidoAmarillo === 0 && this.state.encendidoVerde === 0) {
            e.target.classList.remove("bg-danger")
            e.target.classList.add("alert-danger");
            this.setState({
                encendidoRojo: 0
            })
        }

        if (e.target.id === "yellowLight" && this.state.encendidoRojo === 0 && this.state.encendidoAmarillo === 0 && this.state.encendidoVerde === 0) {
            e.target.classList.remove("alert-warning");
            e.target.classList.add("bg-warning")
            this.setState({
                encendidoAmarillo: 1
            })
        } else if (e.target.id === "yellowLight" && this.state.encendidoAmarillo === 1) {
            e.target.classList.add("alert-warning");
            e.target.classList.remove("bg-warning")
            this.setState({
                encendidoAmarillo: 0
            })
        }

        if (e.target.id === "greenLight" && this.state.encendidoRojo === 0 && this.state.encendidoAmarillo === 0 && this.state.encendidoVerde === 0) {
            e.target.classList.remove("alert-success");
            e.target.classList.add("bg-success")
            this.setState({
                encendidoVerde: 1
            })
        } else if (e.target.id === "greenLight" && this.state.encendidoVerde === 1) {
            e.target.classList.add("alert-success");
            e.target.classList.remove("bg-success")
            this.setState({
                encendidoVerde: 0
            })
        }
    }

    render() {
        return (
            <div id="TL-bg">

                <h1 id="titulo-semaforo">Traffic Light
                    <Link
                        type="button"
                        className="btn btn-success"
                        to="/"
                        id="back-to-jim-TL">
                        Back to JIM
                  </Link>
                </h1>

                <h4 id="titulo2-semaforo" >Turn on the light and turn it off, then you can turn on another light</h4>
                <div className="container justify-content-center" id="semaforo">
                    <div id="redLight" className={" alert-danger redLight"} onClick={this.cambiarLuz}></div>
                    <div id="yellowLight" className={" alert-warning yellowLight"} onClick={e => this.cambiarLuz(e)}></div>
                    <div id="greenLight" className={" alert-success greenLight"} onClick={e => this.cambiarLuz(e)}></div>
                </div>
            </div>
        )
    }
}

export default TrafiicLight;

