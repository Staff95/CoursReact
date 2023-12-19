import React from "react";
function Greet({name,age,children}){
    console.log(name);
        return (
        <div>
            <h1>Salut {name}! Vous avez {age}!</h1>
            <p>{children}</p>
        </div>
        )
}

export default Greet;