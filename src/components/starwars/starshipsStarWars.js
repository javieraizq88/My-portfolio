import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link } from "react-router-dom";

const StarshipsStarWars = props => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div id="container-starwars">
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
                            <li className="nav-item active">
                                <Link className="nav-link border-left" to="/projects/starwars/starships">Starships</Link>
                            </li>
                            <li className="nav-item ">
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

                <div className="container" id="container-starships">
                    <div className="row">
                        <div className="row">
                            {
                                !!store.starships &&
                                    store.starships.results.length > 0 ?
                                    store.starships.results.map((starship, i) => {
                                        const img = starship.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="card mt-3 p-2 mx-3 ml-5 mr-5 mb-3 bg-dark" key={i} id="card-general-starships">
                                                <div className="card-header ">
                                                    <h3 className="card-title text-center text-white" id="titulo-starships">{starship.name}</h3>
                                                </div>
                                                <img src={"/img/Starships/" + img} className="card-img" alt="..." />
                                                <p><Link to={"/starships/" + starship.name} className="mt-2 btn btn-danger ">More...</Link></p>
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
                        !!store.starships &&
                        store.starships.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getStarships(store.starships.previous)}>
                                    Previous
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getStarships(store.starships.previous)}>
                                    Previous
                                </button>
                            )
                    }
                    {
                        !!store.starships &&
                        store.starships.next !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getStarships(store.starships.next)}>
                                    Next
                                </button>
                            ) :( 
                                <button className="btn btn-primary btn-md disabled"
                                    onClick={() => actions.getStarships(store.starships.next)}>
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

export default StarshipsStarWars;