import React from 'react';
import styles from 'styled-components'


const Header = () => {
    return (
        //Created a container const variable in order to style the header 
        <Nav>
            <Logo src="" />
        </Nav>
    )
}

export default Header

const Nav = styles.nav`
    height: 70px;
    background: #0A0B11;
    color: white;
`

// Added a logo const variable for the nav bar that is equal to styles.img
const Logo = styles.img`
    
`