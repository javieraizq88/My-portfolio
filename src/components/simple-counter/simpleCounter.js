import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./simpleCounter.css";
import { Link } from "react-router-dom";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { a: 0 };
    }

    tick() {
        this.setState({
            a: this.state.a + 1,
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    render() {
        return (
            <div id="simpleCounter">
                <div className="container">
                    <div className="row container justify-content-center" >
                        <div className="col  reloj">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="col bg-primary minuts">
                            <strong> x 10.000 segundos </strong>
                        </div>
                        <div className="col bg-secondary minuts">
                            <strong>x 1.000 segundos </strong>
                        </div>
                        <div className="col bg-danger minuts">
                            <strong>x 100 segundos </strong>
                        </div>
                        <div className="col bg-warning minuts">
                            <strong>x 10 segundos</strong>
                        </div>
                        <div className="col bg-success seconds">
                            <strong>x 1 segundo</strong>
                        </div>
                    </div>
                    <div className="container-2 row container justify-content-center" >
                        <div className="col reloj1"><strong>Tiempo</strong></div>
                        <div className="col tiempo">{parseInt(this.state.a / 604800)}</div>
                        <div className="col tiempo">{parseInt(this.state.a / 86400)}</div>
                        <div className="col tiempo">{parseInt(this.state.a / 600)}</div>
                        <div className="col tiempo">{parseInt(this.state.a / 60)}</div>
                        <div className="col tiempo2">{this.state.a % 60}</div>
                    </div>
                </div>
                <br />
                <Link
                    type="button"
                    className="btn btn-success"
                    to="/"
                    id="back-to-jim-IP">
                    Back to JIM
                </Link>

            </div>
        )
    }
}

export default Counter;
