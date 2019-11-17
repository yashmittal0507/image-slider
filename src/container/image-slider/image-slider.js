import React, { Component } from 'react';
import Images from '../../assests/images';
import classes from './image-slider.module.css';
import RightArrow from '../../components/Arrows/rightArrow/rightArrow';
import LeftArrow from '../../components/Arrows/leftArrow/leftArrow';
import SingleSlide from '../../components/single-slide/single-slide';
import ImageThumbnail from '../../components/ImageThumbnail/image-thumbnail';
class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: Images,
      transformImageProperty: 0,
      number: 1
    }
    this.divRef = React.createRef();
  }

  nextImageHandler = () => { 
    // a function that runs when we click the right arrow
    if (this.state.currentImageIndex === this.state.images.length - 1) { //checks if we are on the last image
      return this.setState({
        currentImageIndex: 0,
        transformImageProperty: 0,
        number: 1
      })
    }
    this.setState(prevState => ({ 
      currentImageIndex: prevState.currentImageIndex + 1,
      transformImageProperty: prevState.transformImageProperty -(this.slideWidth()), //gets the client width based on the device size
      number: prevState.number + 1
    }))
    console.log("abc",this.state); 
  }

  previousImageHandler = () => {
    
    if (this.state.currentImageIndex === 0) { //checking if this the first image on the screen
      return;
    }
    this.setState(prevState => ({
      currentImageIndex: prevState.currentImageIndex - 1,
      transformImageProperty: prevState.transformImageProperty + (this.slideWidth()),
      number: prevState.number - 1
    }));
    console.log(this.state);
  }
  slideWidth = () => {
    return this.divRef.current.clientWidth;
  }

  thumbnailClickHandler =index=>{
    console.log("myindex",this.divRef);
    if(index===this.state.currentImageIndex){
      return;
    }
   
    if(index>this.state.currentImageIndex){
      this.setState(prevState => ({
      
        currentImageIndex: index,
        transformImageProperty: -(((index)*this.slideWidth())), 
        number: (index+1)
      }));
    }
    else if(index<this.state.currentImageIndex){
      this.setState(prevState => ({
      
        currentImageIndex: index,
        transformImageProperty: ((prevState.currentImageIndex-index)*this.slideWidth())+prevState.transformImageProperty, 
        number: (index+1)
      }));
    }
  
   
    
  }

  componentDidUpdate(){
    console.log(this.state);
  }
  render() {

    return (

      <div className={classes.imageSlider}>
        <header>
          <h1>Responsive Image Slider</h1>
        </header>

        <RightArrow goNext={this.nextImageHandler} />
        <LeftArrow goBack={this.previousImageHandler} />
        <div className={[classes.imageNumber,classes.imageWrapper].join(' ')}>{this.state.number}/{this.state.images.length}</div>
        <div style={{
          transform: `translateX(${this.state.transformImageProperty}px)`,
          transition: 'transform ease-out 0.5s'
        }} ref={this.divRef}>
          {/* Each image is sent down to the child slide and the transform property just shifts one image based 
          on the client width which varies for different device*/ }
          {this.state.images.map((img, index) => {  
            return <SingleSlide key={index} image={img} />
          })}
        </div>
          <div className={classes.thumbnailWrapper}>
          {this.state.images.map((img, index) => {  
            return <ImageThumbnail key={index} image={img} getThumbnailClicked={()=>this.thumbnailClickHandler(index)}/>
          })}
          </div>
      </div>


    )

  }
}
export default ImageSlider