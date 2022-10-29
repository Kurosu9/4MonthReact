import React from "react";




class CountPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <>
                <h1>{this.props.title}-{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}

export default CountPage;