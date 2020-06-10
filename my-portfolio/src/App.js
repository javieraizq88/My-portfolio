import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./store/appContext";
import Home from "./views/home";
import About from "./components/aboutHome";

const App = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />

            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App)