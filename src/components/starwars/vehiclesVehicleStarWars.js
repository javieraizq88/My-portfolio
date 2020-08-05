import React, { useContext }  from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link, useHistory } from "react-router-dom";

const VehicleStarWars = props => {
    const { store } = useContext(Context);
    const nombreVehiculo = props.match.params.vehicle;
    const history = useHistory();


    return (
        <>
        <div id="container-starwars-indiv">
        <Titulo/>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " id="navbar-starwars">
            <Link className="navbar-brand" to="/projects/starwars">Star Wars</Link>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mr-auto border-right" id="navbar-item">
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/projects/starwars/people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/projects/starwars/films">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/projects/starwars/starships">Starships</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link border-left" to="/projects/starwars/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/projects/starwars/species">Species</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/projects/starwars/planets">Planets</Link>
                        </li>
                    </ul>
                    <Link type="button" className="btn btn-success" to="/" id="back-to-jim">Back to JIM</Link>
                </div>
            </nav>


            <div className="container ">
                <div className="row">
                    <div className="row">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((vehicle, i) => {
                                    if (JSON.stringify(vehicle.name) === JSON.stringify(nombreVehiculo)) {
                                        const img = vehicle.name.replace("/", "-").split(" ").join("-").toLowerCase() + ".jpg";
                                        //para que lea el vehiculo que tiene el / dentro del nombre, se agrega REPLACE
                                        //para linkear la imagen de cada character, hay q cambiar "img/" por URL
                                        //el boton vuelve a people por eso no tiene el "/" final
                                        return (
                                            <div  className="card mt-3 text-white bg-secondary" key={i} >
                                                <div  className="row no-gutters ">
                                                    <div  className="col-md-4 col-xs-4">
                                                        <img src={"/img/vehicles/" + img} 
                                                        className="card-img-top" 
                                                        alt="..." />
                                                    </div>
                                                    <div className="col-md-5 col-xs-5 ">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{vehicle.name}</h5>
                                                            <p className="card-text ml-3">
                                                            Cargo apacity: {vehicle.cargo_capacity} <br/>
                                                            Consumcables: {vehicle.consumables}  <br/> 
                                                            Cost in credits: {vehicle.cost_in_credits} <br/>
                                                            Class: {vehicle.vehicle_class}  <br/>
                                                            Crew: {vehicle.crew} <br/>
                                                            Length: {vehicle.length} <br/>
                                                            Manufacturer: {vehicle.manufacturer}  <br/> 
                                                            Max atmosphering speed: {vehicle.max_atmosphering_speed}<br/> 
                                                            Passengers: {vehicle.passengers} <br/> 
                                                            </p>
                                                    <button className="btn btn-primary" onClick={() => history.goBack()}>Back to starships</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                : (
                                    <div className="col-md-12 text-center">
                                        <div className="spinner-grow" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>


            </div>
        </>
    )
}

export default VehicleStarWars;