import React from 'react'
import Persons from './Persons'

function NameList() {

    // const names = ("John", "Malcolm", "Richard","Titi");

    // const affichageNames = names.map(name =><h2>{name}</h2>);

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    const personsList = persons.map(donneeperson =>
        <Persons key={donneeperson.id} persons={donneeperson} />
        )
    return (
        
        // Version classique 

        //  <h2>{names[0]}</h2>
        // <h2>{names[1]}</h2>
        // <h2>{names[2]}</h2> 
        <div>
            
                {personsList}
            

        </div>
    )
}

export default NameList