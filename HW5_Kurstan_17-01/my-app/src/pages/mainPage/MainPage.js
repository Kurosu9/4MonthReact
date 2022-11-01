import React from "react";
import PhotosList from "../../components/photosList/PhotosList";



class MainPage extends React.Component {
    
    constructor(props) {
        super()
        this.state = {photos: []}
    }

    getPhotos = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(data => this.setState({photos: data.slice(0, 10)}))
    }

    // getInfoOne = (e) => {
    //     console.log(e.target.dataset.id);
    // }
    
    getInfoOne = (e) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${e.target.dataset.id}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <>
                <h1>Main page</h1> 
                <button onClick={this.getPhotos}>get photos</button>
                <PhotosList
                photos={this.state.photos}
                getInfoOne={this.getInfoOne}/>
            </>
        )
    }
}

export default MainPage;