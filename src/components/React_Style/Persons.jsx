import React from 'react'
import './stylesheets.css'

function Persons({persons, color1}) {
    
    //Ternaire pour Changer/Différencier la acouleur de Diana 
    let couleur = (persons.name === 'Diana') ? 'diana' : 'pasdiana';

    return (
            <h2 className={couleur}>
                Salut, moi c'est {persons.name}, j'ai {persons.age} ans, et je ne connais {persons.skill}
            </h2>
    )
}

export default Persons