import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link } from "react-router-dom";

const VehiclesStarWars = props => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div id="container-starwars1">
                <Titulo />

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

                <div className="row" >
                    <div className="card col-md-10" id="card-vehicles">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((vehicle, i) => {
                                    return (
                                        <ul key={i} >
                                            <li>
                                                <h5 className=" card-title">
                                                    <Link to={"/projects/starwars/vehicles/" + vehicle.name}>
                                                        {vehicle.name}
                                                    </Link>
                                                </h5>
                                            </li>
                                        </ul>
                                    )
                                })
                                : (
                                    <div className="col-md-12 col-xs-12 text-center">
                                        <div className="spinner-grow" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12 d-flex justify-content-between">
                        {
                            !!store.vehicles &&
                                store.vehicles.previous !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getVehicles(store.vehicles.previous)}>
                                        Previous
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getVehicles(store.vehicles.previous)}>
                                        Previous
                                    </button>
                                )
                        }
                        {
                            !!store.vehicles &&
                                store.vehicles.next !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getVehicles(store.vehicles.next)}>
                                        Next
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getVehicles(store.vehicles.next)}>
                                        Next
                                    </button>
                                )
                        }

                    </div>
                </div>


            </div>
        </>
    )
}

export default VehiclesStarWars;