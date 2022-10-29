import React from "react";




class ContactsPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
    
    changeInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    add = () => {
        console.log(this.state.text);
    }

    clear = () => {
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <>
                <input type="text" placeholder="text"
                value={this.state.text} onChange={this.changeInput}/>
                <button onClick={this.add}>add</button>
                <button onClick={this.clear}>clear</button>
            </>
        )
    }
}

export default ContactsPage;