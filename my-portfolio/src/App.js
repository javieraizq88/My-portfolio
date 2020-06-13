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
                <Route exact path="/projects/starwars/people" component={PeopleStarWars} />
                <Route exact path="/projects/starwars/people" component={PeopleStarWars} />

            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App)