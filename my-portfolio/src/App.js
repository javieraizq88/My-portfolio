import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./store/appContext";
import Home from "./views/home";
import About from "./components/aboutHome";
import Services from "./components/servicesHome";
import Projects from "./components/projectsHome";
import Contact from "./components/contactHome";
import HomeStarWars from "./components/starwars/homeStarWars";

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

            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App)