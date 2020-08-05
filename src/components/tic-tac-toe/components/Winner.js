import React from 'react';

function Winner(props) {

  return (
    <>
      <h3 className="titulo-blanco">
        The winner is: {props.playero}
      </h3>
    </>
  )
}

export default Winner;