import React from 'react';

function Form(props) {

  return (
    <>
      <h2 id="turn-gato">
        It is {props.player} turn
      </h2>
      <div className="grid-container">
        <div
          className="grid-item div1"
          id="div1"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div2"
          id="div2"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div3"
          id="div3"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div4"
          id="div4"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div5"
          id="div5"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div6"
          id="div6"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div7"
          id="div7"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div8"
          id="div8"
          onClick={(e) => props.desiccion(e)}>
        </div>
        <div
          className="grid-item div9"
          id="div9"
          onClick={(e) => props.desiccion(e)}>
        </div>
      </div>
    </>
  )
}


export default Form;