import React from "react";
import './Carousel.scss'
const Carousel = () => {
    const imageData = [
        {
            source : ""
        },
        {
            source : ""
        },
        {
            source : ""
        },
        {
            source : ""
        },
        {
            source : ""
        },
        {
            source : ""
        },
        {
            source : ""
        }
    ]
    
    const oncarouselScroll = (ScrollDirection) => {
        const scrollElem = document.querySelector('.image-container');
        const imageElem = document.querySelector('.carousel-image-container')
        console.log(imageElem.clientHeight)
       
        if (ScrollDirection == 'left') {
            scrollElem.scrollBy(imageElem.clientHeight)
        } else {
            scrollElem.scrollRight=imageElem.clientHeight
        }
     
}
    return (
      <div className="carousel-container">
            <button onClick ={()=>oncarouselScroll('left')}>Left</button>
            <div className="image-container">
                {imageData.map((item, index) =>
                    <div className="carousel-image-container" key={index}>
                        image{index}
             </div>
             )}
            </div>
            <button onclick={()=>oncarouselScroll('right')}>Right</button>
      </div>
    );
};
  
export default Carousel