import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as  Images from '../../Data/slider_images.json';

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
                Images.Slider_Images.map((image) =>(
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
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`
const Wrap = styled.div`

    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
`