



function PhotosList(props) {
    
    console.log(props);
    
    return (
        <ul>
            {props.photos.map(photo => <li style={{marginBottom: "50px"}}>
                <img src={photo.url} alt="#"
                    style={{width: "100px", height:"100"}}/>
                <h4>{photo.title}</h4>
                <button 
                    data-id={photo.id}
                    onClick={props.getInfoOne}
                >get info</button>    
            </li>)}
        </ul>
    ) 
}

export default PhotosList;