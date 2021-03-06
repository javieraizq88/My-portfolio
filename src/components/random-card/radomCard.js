import React from "react"
import './randomCard.css';
import { Link } from "react-router-dom";

const RandomCard = props => {
    let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let colors = ["♠", '♣', '♥', '♦'];

    let rn1 = Math.floor(Math.random() * cards.length);
    let rn2 = Math.floor(Math.random() * colors.length);

    let cardNumb = card(cards[rn1]);
    let cardColor = (colors[rn2]);

    function card(num) {
        switch (num) {
            case 1: return "A";
            case 11: return "J";
            case 12: return "Q";
            case 13: return "K";
            default: return num;
        }
    }

    if (cardColor === "♥" || cardColor === "♦") {
        return (
            <div id="random-card">
                <div id="titulo-randomCard">
                    <h1>Random card</h1>
                    <h3>Refresh the page to sort the card</h3>
                    <Link
                        type="button"
                        className="btn btn-success mb-5"
                        to="/"
                        id="back-to-jim-randomCard">
                        Back to JIM
                    </Link>
                </div>

                <div class="card1">
                    <div id="card-before" className="rojo ">{cardColor}</div>
                    <div class="number">{cardNumb}</div>
                    <div id="card-after" className="rojo ">{cardColor}</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id="random-card">
                <div id="titulo-randomCard">
                    <h1>Random card</h1>
                    <h3>Refresh the page to sort the card</h3>
                    <Link
                        type="button"
                        className="btn btn-success mb-5"
                        to="/projects"
                        id="back-to-jim-randomCard">
                        Back to JIM
                    </Link>
                </div>

                <div class="card1">
                    <div id="card-before" className="spade ">{cardColor}</div>
                    <div class="number">{cardNumb}</div>
                    <div id="card-after" className="spade cubs hearts diamonds">{cardColor}</div>
                </div>
            </div>
        </>

    )
}

export default RandomCard