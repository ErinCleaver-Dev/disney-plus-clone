import React from 'react';
import styles from 'styled-components'
import * as Links from '../Data/Links.json'

const Header = () => {
    return (
        //Created a container const variable in order to style the header 
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>

                {
                    Links.Links.map((link) =>(
                        <a href="#" key={link.id}>
                        <img src={link.icon} alt={link.alt} />
                        <span>{link.title}</span>
                        </a>
                    ))
                }
                
            </NavMenu>
            <UserImage src="/images/Yoda.jpeg"/>
        </Nav>
    )
}

export default Header

const Nav = styles.nav`
    height: 70px;
    background: #0A0B11;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

// Added a logo const variable for the nav bar that is equal to styles.img
const Logo = styles.img`
    width: 80px;
`

const NavMenu = styles.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;


            &:after {
                content: "";
                height 2px; 
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImage = styles.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`