import React from "react";
function Superheroes(identity){
    console.log(identity.name);
        return (
        <div>
            <h1>Hello {identity.heroName} a.k.a {identity.name}!</h1>
            <p>{identity.children}</p>
        </div>
        )
}

export default Superheroes;
