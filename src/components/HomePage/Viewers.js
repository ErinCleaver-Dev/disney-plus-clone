import React from 'react';
import styles from 'styled-components';
import * as Images from '../../Data/images.json'

const Viewers = () => {
    return (
        <Container>
            {
                // added a map in order to display all of the viewer images located in the json
                Images.Viewer_Images.map((image) =>(
                    <Wrap key={image.id}>
                        <img src={image.url} alt={image.alt}/>
                    </Wrap>
                ))
            }
        </Container>
    )
}

export default Viewers

const Container = styles.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr))


`

const Wrap = styles.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, 
    rgb(0 0 0/75%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, 
        rgb(0 0 0/72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8)
    }
`
