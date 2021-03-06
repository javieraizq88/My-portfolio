import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link, useHistory } from "react-router-dom";

const PlanetStarWars = props => {
    const { store } = useContext(Context);
    const nombrePlaneta = props.match.params.planet;
    const history = useHistory();

    return (
        <>
            <div id="container-starwars-indiv">
                <Titulo />

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " id="navbar-starwars">
                    <Link className="navbar-brand" to="/projects/starwars">Star Wars</Link>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mr-auto border-right" id="navbar-item">
                            <li className="nav-item">
                                <Link className="nav-link border-left" to="/projects/starwars/people">People</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link border-left" to="/projects/starwars/films">Films</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link border-left" to="/projects/starwars/starships">Starships</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link border-left" to="/projects/starwars/vehicles">Vehicles</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link border-left" to="/projects/starwars/species">Species</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link border-left" to="/projects/starwars/planets">Planets</Link>
                            </li>
                        </ul>
                        <Link type="button" className="btn btn-success" to="/" id="back-to-jim">Back to JIM</Link>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="row">
                            {
                                !!store.planets ?
                                    store.planets.results.map((planet, i) => {
                                        if (JSON.stringify(planet.name) === JSON.stringify(nombrePlaneta)) {
                                            const img = planet.name.split(" ").join("-").toLowerCase() + ".jpg";
                                            //para linkear la imagen de cada character, hay q cambiar "img/" por URL
                                            //el boton vuelve a people por eso no tiene el "/" final
                                            return (
                                                <div className="card mt-3 mb-3 bg-secondary" key={i} id="card-planet" >
                                                    <div className="row no-gutters">
                                                        <div className="col-md-4 col-xs-4">
                                                            <img
                                                                src={"/img/planets/" + img}
                                                                className="card-img"
                                                                alt="..." />
                                                        </div>
                                                        <div className="col-md-5 col-xs-5 ">
                                                            <div id="card-planet-text" className="card-body">
                                                                <h5 className="card-title ml-3">{planet.name}</h5>
                                                                <p className="card-text">
                                                                    Climate: {planet.climate}<br />
                                                                    Diameter: {planet.diameter}<br />
                                                                    Gravity: {planet.gravity}<br />
                                                                    Orbital Period: {planet.orbital_period}<br />
                                                                    Population: {planet.population}<br />
                                                                    Rotation period: {planet.rotation_period}<br />
                                                                    Surface water: {planet.surface_water}<br />
                                                                    Terrain: {planet.terrain}<br />
                                                                </p>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => history.goBack()}>
                                                                    Back to Planets
                                                                </button>
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

export default PlanetStarWars;