import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link, useHistory } from "react-router-dom";

const StarshipStarWars = props => {
    const { store } = useContext(Context);
    const nombreStarship = props.match.params.starship;
    const history = useHistory();

    return (
        <>
            <div className="" id="container-starwars">
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
                        <Link type="button" className="btn btn-success" to="/" id="back-to-jim">Back to JIM</Link>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="row">
                            {
                                !!store.starships &&
                                    store.starships.results.length > 0 ?
                                    store.starships.results.map((starship, i) => {
                                        if (JSON.stringify(starship.name) === JSON.stringify(nombreStarship)) {

                                            const img = starship.name.split(" ").join("-").toLowerCase() + ".jpg";
                                            return (
                                                <div className="card mt-5" id="card-starship" key={i} >
                                                    <div className="row no-gutters">
                                                        <div className="col-md-4 col-xs-4">
                                                            <img
                                                                src={"/img/starships/" + img}
                                                                className="card-img-top mt-5 ml-2"
                                                                alt="" />
                                                        </div>
                                                        <div className="col-md-5 col-xs-5 ">
                                                            <div className="card-body">
                                                                <h4 className="ml-1 card-title">{starship.name}</h4>
                                                                <br />
                                                                <p className="card-text ml-3">
                                                                    &nbsp; Cargo capacity: {starship.cargo_capacity}
                                                                    <b />
                                                                    &nbsp; Consumables: {starship.consumables}<br />
                                                                    &nbsp; Cost in credits: {starship.cost_in_credits}<br />
                                                                    &nbsp; Crew: {starship.crew}<br />
                                                                    &nbsp; Model: {starship.model}<br />
                                                                    &nbsp; Passengers: {starship.passengers}<br />
                                                                    &nbsp; Manufacturer: {starship.manufacturer}<br />
                                                                </p>
                                                                <br />
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => history.goBack()}>
                                                                    Back to starships
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

                <div className="mb-5"></div>

            </div>

        </>
    )
}

export default StarshipStarWars;