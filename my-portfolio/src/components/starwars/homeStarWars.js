import React, { useContext }  from "react";
import { Context } from "../../store/appContext";
import Titulo from "./tituloStarWars";
import NavbarStarWars from "./navbarStarWars";

const HomeStarWars = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    console.log(people)
    return (
        <>
        <div id="container-home-starwars">
        <Titulo/>
        <NavbarStarWars />
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