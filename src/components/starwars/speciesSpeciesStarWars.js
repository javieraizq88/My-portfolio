import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link, useHistory } from "react-router-dom";

const SpecieStarWars = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;
    const nombreSpecie = props.match.params.specie; //llamo los paranmetros de species
    const history = useHistory();

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
                            <li className="nav-item active">
                                <Link className="nav-link border-left" to="/projects/starwars/species">Species</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border-left" to="/projects/starwars/planets">Planets</Link>
                            </li>
                        </ul>
                        <Link type="button" className="btn btn-success" to="/projects" id="back-to-jim">Back to JIM</Link>
                    </div>
                </nav>


                <br />

                <div className="container ">
                    <div className="row">
                        <div className="row">
                            {
                                !!store.species ?
                                    store.species.results.map((specie, i) => {
                                        if (JSON.stringify(specie.name) === JSON.stringify(nombreSpecie)) {
                                            const img = specie.name.split(" ").join("-").toLowerCase() + ".jpg";
                                            return (
                                                <div className="card mt-3" key={i} id="card-film" >
                                                    <div className="row no-gutters">
                                                        <div className="col-md-3 col-xs-3">
                                                            <img src={"/img/species/" + img} className="card-img" alt="..." />
                                                        </div>
                                                        <div className="col-md-9 col-xs-9">
                                                            <div className="card-body" >
                                                                <h5 className="card-title">{specie.name}</h5>
                                                                <br />
                                                                <p className="card-text ml-5">
                                                                    &nbsp; Diameter: {specie.diameter}<br />
                                                        &nbsp; Average lifespan: {specie.average_lifespan} <br />
                                                        &nbsp; Designation: {specie.designation}<br />
                                                        &nbsp; Classification: {specie.classification}<br />
                                                        &nbsp; Language: {specie.language} <br />
                                                        &nbsp; Eye colors: {specie.eye_colors} <br />
                                                        &nbsp; Hair colors: {specie.hair_colors}<br />
                                                        &nbsp; Skin color: {specie.skin_colors}<br />
                                                                </p>
                                                                <button className="btn btn-primary" onClick={() => history.goBack()}>Go back</button>

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

export default SpecieStarWars;