import React, { useContext }  from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import { Link } from "react-router-dom";

const HomeStarWars = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    console.log(people)
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
                        <button type="button" className="btn btn-success" id="back-to-jim">Back to JIM</button>
                </div>
            </nav>

            <div className="card-group" >
                <img className="card-img col-md-4 col-xs-4" id="imagen-home-starwars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLAUg8wPXTabhE2uenCinJc-IkB607f5mzGdOKUpqZH-K1Gtlu"/>
                <img className="card-img col-md-4 col-xs-4" id="imagen-home-starwars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlRo9f3QeZ2HfygAzbgbZHg4BfKNpre_eZuysD9jwXBotldV29"/>
                <img className="card-img col-md-4 col-xs-4 pr-4" id="imagen-home-starwars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQlC0-VRfVSfArnhoHZGt8iCBE0ash5jqgSB5bhQiS-uCDWNfM"/>
                <img className="card-img col-md-4 col-xs-4" id="imagen-home-starwars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnv2-5xQrJBjGNOosj6znfqVa38iaBUVfTWa61xj8cT9h7CMhF"/>
                <img className="card-img col-md-4 col-xs-4" id="imagen-home-starwars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKW5PWRfKi2NA6GkidyAqFMh9UVWRTOUZRO3FSXRqWd8lDduZF"/>
                <img className="card-img col-md-4 col-xs-4 pr-4" id="imagen-home-starwars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVquJ9ClQnn2xnTeIKV6GYfYEE5lZWvknSdBZihycMBx2Ifpma"/>
            </div>
            </div>
        </>
    )
}

export default HomeStarWars;