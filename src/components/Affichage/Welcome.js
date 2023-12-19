import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const {name,age,children} = this.props;
        return (
            <div>
                <h1>Bonjour {name}, Ton âge est bien {age} ?</h1><p>{children}</p>
            </div>
    )}
};

export default Welcome;