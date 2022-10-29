import React from "react";




class MainPage extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            title: "i am initial state"
        }
    }

    changeTitle = () => {
        this.setState({title: "hello world"});
    }


    render() {
        return(
            <>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeTitle}>change title</button>
            </>
        )
    }
}

export default MainPage;