import React from "react"

function FunctionClick(){
    function clickHandler(){
        console.log("function clickHandler");
    }

    return (
        <div>
            FunctionClick
                <button type="button" onClick={clickHandler}>Clique Moi</button>
        </div>
    )
}


export default FunctionClick