import React from 'react';
import styles from 'styled-components'


const Home = () => {
    return (
        //Created a container const variable in order to style the header 
        <Container>
            Home
        </Container>
    )
}

export default Home

const Container = styles.div`
    height: 70px;
    background: #0A0B11;
    color: white;
`
