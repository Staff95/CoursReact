import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false,
            message: 'Welcome Guest!'
        }
    }

    seConnecter(){
        this.setState({
            isLoggedIn: true,
            message: 'Welcome User!',
        })
    }

    //TERNAIRE 
    // render() {
    //     return this.state.isLoggedIn ? (<div>Salut Soso</div>): (<div>Welcome Guest</div>)
    //     }

    // Circuit Court 
    // render(){
    //     return this.state.isLoggedIn && (<div>Bonjour p'tit chat!</div>)
    // }

    // Variable intérmédiaire
    render() {
        let message;
            if(this.state.isLoggedIn){
                message = <div>Bienvenue Guest</div>
            }
            else{
            message = <div>Welcome Ghest</div>
            }
            return <div>{message}</div>
    }
}


export default UserGreeting