import React, { useContext }  from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link } from "react-router-dom";

const VehiclesStarWars = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    return (
        <>
        <div id="container-home-starwars">
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
                    <Link type="button" className="btn btn-success" to="/projects" id="back-to-jim">Back to JIM</Link>

                </div>
            </nav>





            </div>
        </>
    )
}

export default VehiclesStarWars;