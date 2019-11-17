import classes from './single-slide.module.css';
import React from 'react';


const SingleSlide =(props) =>{

    const style={
     width:'100%'
    }
   
    return (
      
        
        <div className={classes.slide} >
        
        <img src={props.image} alt="images" style={style}/> {/*To make the image responsive */}
        </div>
    
     
       

    )
}

export default SingleSlide;