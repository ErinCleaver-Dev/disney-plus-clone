import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as  Slider_Images from '../../Data/slider_images.json';

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidsToScroll: 1,
        autoplay: true
    }

    return (
        // added a container to contain the information for the image silder
        <Carousel {...settings}>
            {
                Slider_Images.Slider_Images.map((image) =>(
                    <Wrap key={image.id}>
                        <img src={image.url}/>
                    </Wrap>
                ))
            }
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`

`
const Wrap = styled.div`
`