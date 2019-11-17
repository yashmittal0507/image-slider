import React from 'react';
import classes from './image-thumbnail.module.css';

const ImageThumbnail =(props) =>{

    const style={
     width:'100%'
    }
   
    return (
      
        
        <div className={classes.thumbnail} >
        
        <img src={props.image} alt="images" style={style} onClick={props.getThumbnailClicked}/> 
        </div>
    
     
       

    )
}

export default ImageThumbnail;