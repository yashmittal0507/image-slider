import React from 'react';
import classes from './rightArrow.module.css';
const RightArrow =(props)=>{
    return (
     
       <div className={classes.rightArrow} onClick={props.goNext}>&#10095;</div>
       
   
    );
   }
   
   export default RightArrow;