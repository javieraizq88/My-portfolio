import React, { useContext } from "react"
import { Context } from "../../store/appContext";

const SimpleCounter = props => {
    const { store, actions } = useContext(Context)

    
//    const tick: () => {
//         setStore({
//           a: a + 1, 
//         });
//       },

let a = 0;
    return (
        <>
            <div className= "row container justify-content-center contenedorGrande" >
                <div className="col reloj"><i className="far fa-clock"></i></div>
                <div className="col weeks">{parseInt(a /10000)}</div>
                <div className="col days">{parseInt(a /1000)}</div>
                <div className="col hours">{parseInt(a /100)}</div>
                <div className="col minuts">{parseInt(a /10)}</div>
                <div className="col seconds">{a % 10}</div>
            </div>
        </>
    )
}

export default SimpleCounter