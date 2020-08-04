import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link } from "react-router-dom";

const SpeciesStarWars = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;

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
                            <li className="nav-item ">
                                <Link className="nav-link border-left" to="/projects/starwars/films">Films</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link border-left" to="/projects/starwars/starships">Starships</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link border-left" to="/projects/starwars/vehicles">Vehicles</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link border-left" to="/projects/starwars/species">Species</Link>
                            </li>
                            <li className="nav-item">
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
                                !!store.species &&
                                    store.species.results.length > 0 ?
                                    store.species.results.map((specie, i) => {
                                        const img = specie.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div
                                                className="card col-md-5 mt-3 p-1 mx-3 text-center"
                                                key={i}
                                                id="card-species"
                                            >
                                                <div className="row no-grotter">

                                                    <h3 className=" col-md-8 card-title">
                                                        <Link
                                                            id="text-card-species"
                                                            to={"/projects/starwars/species/" + specie.name}>
                                                            <br />
                                                            {specie.name}
                                                        </Link>
                                                    </h3>
                                                    <img
                                                        src={"/img/species/" + img}
                                                        className="col-md-4 card-img-top"
                                                        alt="..." />
                                                </div>
                                            </div>
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
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12 d-flex justify-content-between">
                        {
                            !!store.species &&
                                store.species.previous !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getSpecies(store.species.previous)}>
                                        Previous
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getSpecies(store.species.previous)}>
                                        Previous
                                    </button>
                                )
                        }
                        {
                            !!store.species &&
                                store.species.next !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getSpecies(store.species.next)}>
                                        Next
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getSpecies(store.species.next)}>
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

export default SpeciesStarWars;