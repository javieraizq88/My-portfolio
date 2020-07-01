import React from "react"

const ExcuseGenerator = props => {

    const excuse = (e) => {
        let who = ['the dog','my granma','his turtle','my bird'];
        let what = ['eat','pissed','crushed','broked'];
        let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
        
        
        let whoRandom = Math.floor(Math.random() * who.length);
        let whatRandom = Math.floor(Math.random() * what.length);
        let whenRandom = Math.floor(Math.random() * when.length);
        
       return (who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom])
        
    }
    
    return (
        <>
        <div id="excuse-container">
                <h1>OMG! you will not believe me but...</h1>
                <br/>
                    <h1 onClick= {(e) => excuse ()} >{excuse()}</h1>
            </div>
        </>
    )
}
export default ExcuseGenerator