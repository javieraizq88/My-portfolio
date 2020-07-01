import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link } from "react-router-dom";

const PlanetsStarWars = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store;

    return (
        <>
            <div id="container-home-starwars">
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
                        <Link type="button" className="btn btn-success" to="/projects" id="back-to-jim">Back to JIM</Link>
                    </div>
                </nav>


                <div className="container">
                    <div className="row">
                        <div className="row">
                            {
                                !!store.planets ?
                                    store.planets.results.map((planet, i) => {
                                        const img = planet.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="card mt-3 p-1 mx-3 bg-dark" key={i} id="card-planets">
                                                <div className="">
                                                    <img src={"/img/planets/" + img} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{planet.name}</h5>
                                                        <p><Link to={"/projects/starwars/planets/" + planet.name} className=" btn btn-danger">More...</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
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

                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between">
                        {
                            !!store.planets &&
                                store.planets.previous !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getPlanets(store.planets.previous)}>
                                        Previous
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getPlanets(store.planets.previous)}>
                                        Previous
                                    </button>
                                )
                        }
                        {
                            !!store.planets &&
                                store.planets.next !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getPlanets(store.planets.next)}>
                                        Next
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getPlanets(store.planets.next)}>
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

export default PlanetsStarWars;