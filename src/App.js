import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./store/appContext";
import Home from "./views/home";
import About from "./components/aboutHome";
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
import PlanetStarWars from "./components/starwars/planetsPlanetStarWars";
import StarshipStarWars from "./components/starwars/starshipsStarsipStarWars";

const App = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects/starwars" component={HomeStarWars} />
                <Route exact path="/projects/starwars/people" component={PeopleStarWars} />
                <Route exact path="/projects/starwars/films" component={FilmsStarWars} />
                <Route exact path="/projects/starwars/planets" component={PlanetsStarWars} />
                <Route exact path="/projects/starwars/starships" component={StarshipsStarWars} />
                <Route exact path="/projects/starwars/species" component={SpeciesStarWars} />
                <Route exact path="/projects/starwars/vehicles" component={VehiclesStarWars} />
                <Route exact path="/projects/starwars/people/character" component={CharacterStarWars} />
                <Route exact path="/projects/starwars/planets/planet" component={PlanetStarWars} />
                <Route exact path="/projects/starwars/starships/starship" component={StarshipStarWars} />
                <Route exact path="/projects/starwars/species/specie" component={} />
                <Route exact path="/projects/starwars/vehicles/vehicle" component={} />

            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App)