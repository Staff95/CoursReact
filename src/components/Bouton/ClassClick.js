import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Bouton click");
    }
    render() {
        return (
            <div>
            <button type="button" onClick={this.clickHandler}>Connexion</button>
        </div>
        )
    }
}

export default ClassClick