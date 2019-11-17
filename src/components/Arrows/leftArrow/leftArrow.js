

import React from 'react';
import classes from './leftArrow.module.css';
const LeftArrow =(props)=>{
 return (
   
   <div className={classes.leftArrow} onClick={props.goBack}>&#10094;</div>

 );
}

export default LeftArrow