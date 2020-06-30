import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link } from "react-router-dom";

const PeopleStarWars = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    console.log(people)
    return (
        <>
            <div id="container-starwars">
                <Titulo />

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " id="navbar-starwars">
                    <Link className="navbar-brand" to="/projects/starwars">Star Wars</Link>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mr-auto border-right" id="navbar-item">
                            <li className="nav-item active">
                                <Link className="nav-link border-left" to="/projects/starwars/people">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border-left" to="/projects/starwars/films">Films</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border-left" to="/projects/starwars/starships">Starships</Link>
                            </li>
                            <li className="nav-item">
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
              
                <div className="container">
                <div className="row" >
                    <div className="row" >
                        {
                            !!store.people &&
                                store.people.results.length > 0 ?
                                store.people.results.map((character, i) => {
                                    const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="card col-md-3 col-xs-3 ml-5 mt-3 p-1 bg-dark" key={i} id="card-general1">
                                            <div id="card-people">
                                                <img
                                                    src={"/img/people/" + img}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{character.name}</h5>
                                                    <p>
                                                        <Link
                                                            to={"/projects/starwars/people/" + character.name}
                                                            className=" btn btn-danger">
                                                            More...
                                                        </Link>
                                                    </p>
                                                </div>
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


                {/* botones */}
                <div className="row">
                    <div className="col-md-12 col-xs-12 d-flex justify-content-between">
                        {
                            !!store.people &&
                                store.people.previous !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getPeople(store.people.previous)}>
                                        Previous
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getPeople(store.people.previous)}>
                                        Previous
                                    </button>
                                )
                        }
                        {
                            !!store.people &&
                                store.people.next !== null ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getPeople(store.people.next)}>
                                        Next
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-md disabled"
                                        onClick={() => actions.getPeople(store.people.next)}>
                                        Next
                                    </button>
                                )
                        }

                    </div>
                </div>
                </div>



            </div>
        </>
    )
}

export default PeopleStarWars;