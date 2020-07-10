import React from "react";
import "./battleship.css";

const Battleship = props => {
    // var model = {
    //     boardSize: 7,
    //     numShips: 4,
    //     shipLength: 3,
    //     shipsSunk: 0,

    //     ships: [
    //         { locations: [0, 0, 0], hits: ["", "", ""] },
    //         { locations: [0, 0, 0], hits: ["", "", ""] },
    //         { locations: [0, 0, 0], hits: ["", "", ""] },
    //         { locations: [0, 0, 0], hits: ["", "", ""] },
    //     ],

    //     fire: function (guess) {
    //         for (let i = 0; i < this.numShips; i++) {
    //             var ship = this.ships[i];
    //             var index = ship.locations.indexOf(guess);

    //             if (ship.hits[index] === "hit") {
    //                 view.displayMessage("You already hit this location");
    //                 return true;
    //             } else if (index >= 0) {
    //                 ship.hits[index] = "hit";
    //                 view.displayHit(guess);
    //                 view.displayMessage("Hit!!");

    //                 if (isSunk(ship)) {
    //                     ("You sank my ship!",
    //                     shipsSunk++)
    //                 }
    //                 return true;
    //             }
    //         }

    //         view.displayMiss(guess);
    //         view.displayMessage("You missed!");
    //         return false;
    //     },

    //     isSunk: function (ship) {
    //         for (let index = 0; index < this.shipLength; index++) {
    //             if (ship.hits[index] !== "hit") {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     },

    //     generateShipLocations: function () {
    //         var locations;

    //         for (let i = 0; i < this.numShips; i++) {
    //             do {
    //                 locations = this.generateShip();
    //             } while (this.collision(locations));
    //             this.ships[i].locations = locations;
    //         }
    //         console.log("ships array is in: ");
    //         console.log(this.ships);
    //     },

    //     generateShip: function () {
    //         var direction = Math.floor(Math.random() * 2);
    //         var row, col;

    //         if (direction === 1) {
    //             row = Math.floor(Math.random() * this.boardSize);
    //             col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
    //         } else {
    //             row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
    //             col = Math.floor(Math.random() * this.boardSize);
    //         }

    //         var newShipLocations = [];
    //         for (let i = 0; i < this.shipLength; i++) {
    //             if (direction === 1) {
    //                 newShipLocations.push(row + "" + (col + i));
    //             } else {
    //                 newShipLocations.push((row + i) + "" + col);
    //             }
    //         }
    //         return newShipLocations;
    //     },

    //     collision: function (locations) {
    //         for (let i = 0; i < this.numShips; i++) {
    //             var ship = this.ships[i];
    //             for (let j = 0; j < locations.length; j++) {
    //                 if (ship.locations.indexOf(locations[j]) >= 0) {
    //                     return true;
    //                 }
    //             }
    //         }
    //         return false;
    //     },

    // };


    return (

        <div id="battleship">

            <h1 id="battleship-h1">Battleship</h1>

            <h3 id="battleship-h3">Enter the location and find my ships!</h3>

            <span>
                <form id="battleship-form">
                    <input type="text" id="guessInput" placeholder="A0" />
                    <input type="button" class="btn btn-danger" id="fireButton" value="Fire!" />
                </form>
            </span>

            <div id="board">
                <div id="messageArea"></div>
                <table id="table">
                    <tr>
                        <td id="00"></td>
                        <td id="01"></td>
                        <td id="02"></td>
                        <td id="03"></td>
                        <td id="04"></td>
                        <td id="05"></td>
                        <td id="06"></td>
                    </tr>
                    <tr>
                        <td id="10"></td>
                        <td id="11"></td>
                        <td id="12"></td>
                        <td id="13"></td>
                        <td id="14"></td>
                        <td id="15"></td>
                        <td id="16"></td>
                    </tr>
                    <tr>
                        <td id="20"></td>
                        <td id="21"></td>
                        <td id="22"></td>
                        <td id="23"></td>
                        <td id="24"></td>
                        <td id="25"></td>
                        <td id="26"></td>
                    </tr>
                    <tr>
                        <td id="30"></td>
                        <td id="31"></td>
                        <td id="32"></td>
                        <td id="33"></td>
                        <td id="34"></td>
                        <td id="35"></td>
                        <td id="36"></td>
                    </tr>
                    <tr>
                        <td id="40"></td>
                        <td id="41"></td>
                        <td id="42"></td>
                        <td id="43"></td>
                        <td id="44"></td>
                        <td id="45"></td>
                        <td id="46"></td>
                    </tr>
                    <tr>
                        <td id="50"></td>
                        <td id="51"></td>
                        <td id="52"></td>
                        <td id="53"></td>
                        <td id="54"></td>
                        <td id="55"></td>
                        <td id="56"></td>
                    </tr>
                    <tr>
                        <td id="60"></td>
                        <td id="61"></td>
                        <td id="62"></td>
                        <td id="63"></td>
                        <td id="64"></td>
                        <td id="65"></td>
                        <td id="66"></td>
                    </tr>
                </table>

            </div>

        </div>
    )
}

export default Battleship