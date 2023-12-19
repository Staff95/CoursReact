import React, { Component } from 'react'
import './formExo.css'


export class FormExo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        pseudo:"",
        nom:"",
        prenom:"",
        email:"",
      }
    }

    handleNomChange = event => {
        this.setState({ 
            nom: event.target.value
        })
    }

    handlePrenomChange = event => {
        this.setState({ 
            prenom: event.target.value
        })
    }

    handlePseudoChange = event => {
        if(event.target.value.length == 0){
            event.target.className = "black"
        }
        else if (event.target.value.length < 3){
            event.target.className = "red"
        }
        else {
            event.target.className = "green"
        }
    }
        }

        handleEmailChange = event => {
            this.setState({ pseudo: event.target.value})
        }

    handleTopicsChange = event => {
        this.setState({ 
            topics: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`Merci ${this.state.nom} ${this.state.prenom} d'avoir pris contact avec nous. Nous reviendrons avec vous vers vous à cette email : ${this.state.email}`)
        event.preventDefault();
    }



    render() {
         const { nom, pseudo, prenom, email } = this.state;
    
        return (
          <div>			
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nom : </label>
                        <input type="text" value={nom} onChange={this.handleNomChange}/>
                </div>
      
                <div>
                    <label>Prénom : </label>
                        <input 
                            type="text"
                            value={prenom}
                            onChange={this.handlePrenomChange}
                        />
                </div>   
                <div>
                    <label>Pseudo : </label>
                        <input
                            type="text"
                            value={pseudo}
                            onChange={this.handlePrenomChange}
                            className='black'
                        />
                </div>
                <div>
                    <label>Email :</label>
                        <input
                            type='email'
                            value={email}
                            onChange={this.handleEmailChange}
                        />
                </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormExo