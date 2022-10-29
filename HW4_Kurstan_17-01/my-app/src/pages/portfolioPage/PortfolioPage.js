import React from "react";




class PortfolioPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            works: []
        }
    }

    getWork = () => {
        this.setState({
            works: ["Frontend", "Backend", "Design"]
        })
    }

    render() {
        return (
            <>
                <button onClick={this.getWork}>Get</button>
                <ul>
                    {
                        this.state.works.map(elem => <li>{elem}</li>)
                    }
                </ul>
            </>
        )
    }
}

export default PortfolioPage;