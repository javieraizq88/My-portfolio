import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link, useHistory } from "react-router-dom";

const CharacterStarWars = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const nombreCharacter = props.match.params.character; //llamo los paranmetros de people
    const history = useHistory();


    console.log(people)
    return (
        <>
            <div id="container-starwars-indiv">
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
                    <div className="row">
                        <div className="row">
                            {
                                !!store.people ?
                                    store.people.results.map((character, i) => {
                                        if (JSON.stringify(character.name) === JSON.stringify(nombreCharacter)) {
                                            const img = character.name.split(" ").join("-").toLowerCase() + ".jpg";
                                            return (
                                                <div className="card mt-3 text-white bg-secondary " >
                                                    <div className="row no-gutters">
                                                        <div className="col-md-4 col-xs-4">
                                                            <img
                                                                src={"/img/people/" + img}
                                                                className="card-img-top"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div className="col-md-5 col-xs-5 ">
                                                            <div className="card-body ">
                                                                <h4 className="card-title">{character.name}</h4>
                                                                <p className="card-text ml-3">
                                                                    &nbsp; Gender : {character.gender} <br />
                                                                    &nbsp; Eye color : {character.eye_color}<br />
                                                                    &nbsp; Hair color : {character.hair_color}<br />
                                                                    &nbsp; Mass : {character.mass}<br />
                                                                    &nbsp; Height : {character.height}<br />
                                                                    &nbsp; Birth year : {character.birth_year}<br />
                                                                </p>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => history.goBack()}>
                                                                    Back to People
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
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

            </div>
        </>
    )
}

export default CharacterStarWars;