import React from "react";




class AboutUS extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            text: true
        }
    }

    changeText = () => {
        this.setState({text: !this.state.text})
    }
    
    render() {
        return (
            <>
                {this.state.text ? <p>Text</p> : ""}
                <button onClick={this.changeText}>Button</button>
            </>
        )
    }
}

export default AboutUS;