import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from "./store/appContext";
import Home from "./views/home";
import Projects from "./components/projectsHome";
import Contact from "./components/contactHome";
import TicTac from "./components/tic-tac-toe/Tic-tac-toe";
import TrafiicLight from "./components/traffic-light/traffic-light";
import InstagramPost from "./components/instagram-post/instagram-post";
import DigitalPostcard from "./components/digital-postcard/digital-postcard";
import InstagramPhotoFeed from "./components/instagram-photo-feed/instagram-photo-feed";
import InstagramPhotoFeed2 from "./components/instagram-photo-feed/instagram2";
import ExcuseGenerator from "./components/excuseGenerator/excuse";
import RandomCard from "./components/random-card/radomCard";
import Battleship from "./components/battleship/battleship";
import Pregunta1Encuesta from "./components/encuesta/pregunta1";
import Pregunta2Encuesta from "./components/encuesta/pregunta2";
import HomeEncuesta from "./components/encuesta/homeEnc";
import Pregunta3Encuesta from "./components/encuesta/pregunta3";
import Pregunta4Encuesta from "./components/encuesta/pregunta4";
import FinalizarEncuesta from "./components/encuesta/finalizarEnc";
import CV from "./components/CV";
import ListaToDo from "./components/todo-list/todolist";
import Counter from "./components/simple-counter/simpleCounter";
import Navbar from "./components/navbar";
import Prueba from "./views/prueba";

const App = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cv" component={CV} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/prueba" component={Prueba} />
                <Route exact path="/projects/encuesta" component={HomeEncuesta} />
                <Route exact path="/projects/todolist" component={ListaToDo} />
                <Route exact path="/projects/battleship" component={Battleship} />
                <Route exact path="/projects/tic-tac-toe" component={TicTac} />
                <Route exact path="/projects/traffic-light" component={TrafiicLight} />
                <Route exact path="/projects/instagram-post" component={InstagramPost} />
                <Route exact path="/projects/digital-postcard" component={DigitalPostcard} />
                <Route exact path="/projects/instagram-photo-feed" component={InstagramPhotoFeed} />
                <Route exact path="/projects/instagram-photo-feed2" component={InstagramPhotoFeed2} />
                <Route exact path="/projects/ExcuseGenerator" component={ExcuseGenerator} />
                <Route exact path="/projects/RandomCard" component={RandomCard} />
                <Route exact path="/projects/simplecounter" component={Counter} />
                <Route exact path="/projects/encuesta/1" component={Pregunta1Encuesta} />
                <Route exact path="/projects/encuesta/2" component={Pregunta2Encuesta} />
                <Route exact path="/projects/encuesta/3" component={Pregunta3Encuesta} />
                <Route exact path="/projects/encuesta/4" component={Pregunta4Encuesta} />
                <Route exact path="/projects/encuesta/fin" component={FinalizarEncuesta} />

            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App)