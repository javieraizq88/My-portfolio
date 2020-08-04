import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./store/appContext";
import Home from "./views/home";
import Services from "./components/servicesHome";
import Projects from "./components/projectsHome";
import Contact from "./components/contactHome";
import HomeStarWars from "./components/starwars/homeStarWars";
import PeopleStarWars from "./components/starwars/peopleStarWars";
import FilmsStarWars from "./components/starwars/filmsStarWars";
import PlanetsStarWars from "./components/starwars/planetsStarWars";
import StarshipsStarWars from "./components/starwars/starshipsStarWars";
import VehiclesStarWars from "./components/starwars/vehiclesStarWars";
import SpeciesStarWars from "./components/starwars/speciesStarWars";
import CharacterStarWars from "./components/starwars/peopleCharacterStarWars";
import StarshipStarWars from "./components/starwars/starshipsStarsipStarWars";
import SpecieStarWars from "./components/starwars/speciesSpeciesStarWars";
import VehicleStarWars from "./components/starwars/vehiclesVehicleStarWars";
import TicTac from "./components/tic-tac-toe/Tic-tac-toe";
import TrafiicLight from "./components/traffic-light/traffic-light";
import InstagramPost from "./components/instagram-post/instagram-post";
import DigitalPostcard from "./components/digital-postcard/digital-postcard";
import InstagramPhotoFeed from "./components/instagram-photo-feed/instagram-photo-feed";
import InstagramPhotoFeed2 from "./components/instagram-photo-feed/instagram2";
import PlanetStarWars from "./components/starwars/planetsPlanetStarWars";
import ExcuseGenerator from "./components/excuseGenerator/excuse";
import RandomCard from "./components/random-card/radomCard";
import Battleship from "./components/battleship/battleship";
import Pregunta1Encuesta from "./components/encuesta/pregunta1";
import Pregunta2Encuesta from "./components/encuesta/pregunta2";
import HomeEncuesta from "./components/encuesta/homeEnc";
import Pregunta3Encuesta from "./components/encuesta/pregunta3";
import Pregunta4Encuesta from "./components/encuesta/pregunta4";
import FinalizarEncuesta from "./components/encuesta/finalizarEnc";
import Navbar from "./components/navbar";
import CV from "./components/CV";
import ListaToDo from "./components/todo-list/todolist";

const App = props => {
    return (
        <BrowserRouter>
        {/* <Navbar /> */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cv" component={CV} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects/encuesta" component={HomeEncuesta} />
                <Route exact path="/projects/todolist" component={ListaToDo} />
                <Route exact path="/projects/battleship" component={Battleship} />
                <Route exact path="/projects/starwars" component={HomeStarWars} />
                <Route exact path="/projects/tic-tac-toe" component={TicTac} />
                <Route exact path="/projects/traffic-light" component={TrafiicLight} />
                <Route exact path="/projects/instagram-post" component={InstagramPost} />
                <Route exact path="/projects/digital-postcard" component={DigitalPostcard} />
                <Route exact path="/projects/instagram-photo-feed" component={InstagramPhotoFeed} />
                <Route exact path="/projects/instagram-photo-feed2" component={InstagramPhotoFeed2} />
                <Route exact path="/projects/ExcuseGenerator" component={ExcuseGenerator} />
                <Route exact path="/projects/RandomCard" component={RandomCard} />
                <Route exact path="/projects/encuesta/1" component={Pregunta1Encuesta} />
                <Route exact path="/projects/encuesta/2" component={Pregunta2Encuesta} />
                <Route exact path="/projects/encuesta/3" component={Pregunta3Encuesta} />
                <Route exact path="/projects/encuesta/4" component={Pregunta4Encuesta} />
                <Route exact path="/projects/encuesta/fin" component={FinalizarEncuesta} />
                <Route exact path="/projects/starwars/people" component={PeopleStarWars} />
                <Route exact path="/projects/starwars/films" component={FilmsStarWars} />
                <Route exact path="/projects/starwars/planets" component={PlanetsStarWars} />
                <Route exact path="/projects/starwars/starships" component={StarshipsStarWars} />
                <Route exact path="/projects/starwars/species" component={SpeciesStarWars} />
                <Route exact path="/projects/starwars/vehicles" component={VehiclesStarWars} />
                <Route exact path="/projects/starwars/people/:character" component={CharacterStarWars} />
                <Route exact path="/projects/starwars/planets/:planet" component={PlanetStarWars} />
                <Route exact path="/projects/starwars/starships/:starship" component={StarshipStarWars} />
                <Route exact path="/projects/starwars/species/:specie" component={SpecieStarWars} />
                <Route exact path="/projects/starwars/vehicles/:vehicle" component={VehicleStarWars} />

            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App)