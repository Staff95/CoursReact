import React, { Component } from 'react'

class Formulaire extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comments: "",
         topics: "react",
      }
    }
    handleUsernameChange = event => {
        if(event.target.value.length < 6){
            console.log("Username must be at least 6 characters");
        }
        else{
            console.log("Le bon Username GG mon gars");
        }

        this.setState({ 
            username: event.target.value
        })
    }
    handleCommentsChange = event => {
        this.setState({ 
            comments: event.target.value
        })
    }
    handleTopicsChange = event => {
        this.setState({ 
            topics: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }


  render() {
    const { username, comments,topics } = this.state;

    return (
      <div>			
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username </label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
            </div>
            <div>
                <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                    />
            </div>
            <div>
                <label>Topic</label>
                    <select value={topics} onChange={this.handleTopicsChange} >
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                        className
                    </select>
            </div>
				<button type="submit">Submit</button>
			</form>
        </div>
    )
  }
}

export default Formulaire