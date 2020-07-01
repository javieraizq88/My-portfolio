import React from "react"
import "./excuse.css"
import { Link } from "react-router-dom";

const ExcuseGenerator = props => {

    const excuse = (e) => {
        let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
        let what = ['eat', 'pissed', 'crushed', 'broked'];
        let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];


        let whoRandom = Math.floor(Math.random() * who.length);
        let whatRandom = Math.floor(Math.random() * what.length);
        let whenRandom = Math.floor(Math.random() * when.length);

        return (who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom])
    }

    return (
        <>
            <h1 id="titulo-excuse"> The best excuse generator</h1>

            <h3 id="titulo-excuse">If you need another excuse, you have to refresh the webpage</h3>
            <div id="excuse-container">
                <h2 onClick={(e) => excuse()} >OMG! you will not believe me but... {excuse()}</h2>

            </div>

            <Link type="button" className="btn btn-success mb-5" to="/projects" id="back-to-jim-excuse">Back to JIM</Link>

        </>
    )
}
export default ExcuseGenerator