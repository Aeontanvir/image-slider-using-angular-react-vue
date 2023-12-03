import React, { useState } from 'react'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {  
        position: "relative",
        height: "100%",
    };
    const slideStyles = { 
        backgroundImage: `url(${slides[currentIndex].url})`, 
        width: '100%', 
        height: '100%', 
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };
    const leftArrowSytles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }
    const rightArrowSytles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }

    const indicatorContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }
    const indicatorStyles = {
        margin: '0 3px',
        fontSize: '20px',
        cursor: "pointer",
    }
    
    function onNext(){
        const isLastSlide = currentIndex === slides.length -1;
        const index = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(index)
    }
    function onPrevious(){
        const isFirstSlide = currentIndex === 0;
        const index = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(index)
    }
    function onIndicator(index){
        setCurrentIndex(index)
    }
    return (
        <div style={sliderStyles}>
            <div style={leftArrowSytles} onClick={onPrevious}>❰</div>
            <div style={rightArrowSytles} onClick={onNext}>❱</div>
            <div style={slideStyles}></div>
            <div style={indicatorContainerStyles}>
                {slides.map((slide, slideIndex) => 
                    <div style={indicatorStyles} key={slideIndex} onClick={() => onIndicator(slideIndex)}>●</div>      
                )}
            </div>
        </div>
    )
}

export default ImageSlider;