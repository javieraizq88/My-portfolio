import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./simpleCounter.css";

class Counter extends Component {
    constructor(props){ 
        super(props);
        this.state = {a: 0};
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

    render () { 
        return (
            <div id="simpleCounter">
            <div className="container">
            <div className= "row container justify-content-center" >
                <div className="col reloj"><i className="far fa-clock"></i></div>
                <div className="col minuts">Total de Semanas</div>
                <div className="col minuts">Total de Dias</div>
                <div className="col minuts">Total de Horas</div>
                <div className="col minuts">Total de Minutos</div>
                <div className="col seconds">Total de Segundos</div>
            </div>
            <div className= "row container justify-content-center" >
                <div className="col reloj1">Tiempo</div>
                <div className="col tiempo">{parseInt(this.state.a /604800)}</div>
                <div className="col tiempo">{parseInt(this.state.a /86400)}</div>
                <div className="col tiempo">{parseInt(this.state.a /600)}</div>
                <div className="col tiempo">{parseInt(this.state.a /60)}</div>
                <div className="col tiempo2">{this.state.a % 60}</div>
            </div>
            </div>
            </div>
        )
    }
}

export default Counter;
