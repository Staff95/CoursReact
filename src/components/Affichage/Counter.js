import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }
        increment(){
            this.setState((prevState) => ({
                count: prevState.count + 1
            }))
        }

    

        incrementFive(){
            this.increment()
            this.increment()
            this.increment()
            this.increment()
            this.increment()
        }

        incrementProps(){
            this.setState((prevState,props) => ({
                count: prevState.count + props.value
            }))
        }
    render() {
        return (
            <div>
                Counter {this.state.count}

                <button onClick={()=>this.increment()}>Increment+1</button>
                <button onClick={()=>this.incrementFive()}>Increment+5</button>
                <button onClick={()=>this.incrementProps()}>{this.props.value} + Props</button>
            </div>
        )
    }
}
export default Counter;