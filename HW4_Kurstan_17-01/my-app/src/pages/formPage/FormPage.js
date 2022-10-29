import React from "react";




class FormPage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: ""
        }
    }

    changeInput = event => {
        event.preventDefault();
        this.setState({username: event.target.value})
    }
    
    register = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <>
                <from>
                    <input
                    type="text"
                    placeholder="name"
                    value={this.state.username}
                    onChange={this.changeInput}/>
                    <button onClick={this.register}>register</button>
                </from>
            </>
        )
    }
}

export default FormPage;