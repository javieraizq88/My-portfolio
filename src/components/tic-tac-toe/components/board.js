import React from 'react';

function Board(props) {

  return (
    <>
      <h3 style={{ color: 'white' }}></h3>
      <div id="styleChoosePlayer">
        <h4 style={{ color: 'white' }}>Choose one option and write your name </h4>
        <form>
          <input type="text" onChange={(y) => props.handleInput(y)} id="input1" placeholder="Player 1"></input>
          <input type="text" onChange={(y) => props.handleInput(y)} id="input2" placeholder="Player 2"></input>
          <br />
          <button type="button" className="" id="styleButtonX"  onClick={(e) => props.select(e)}><span id="styleInsideButton">X</span></button>
          <button type="button" className="" id="styleButtonO" onClick={(e) => props.select(e)}><span id="styleInsideButton">0</span></button>
        </form>
      </div>
    </>

  )
}


export default Board;