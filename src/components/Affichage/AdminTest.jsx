import React, { Component } from 'react'

class AdminTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            admin: false,
        }
    }

    adminLogged(){
        this.setState({admin: true})
    }


    render() { 
        return this.state.admin ? 
        
        <div><button>Edit</button>Welcome Admin</div> 
        :
        <div>
        <p>Veuillez-vous connecter en tant qu'admin</p>
        <button onClick={()=>this.adminLogged()}>Se connecter</button>
        </div>
    }
}

export default AdminTest