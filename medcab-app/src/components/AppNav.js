import React from 'react';
import { Heading, NavbarDiv, NavbarUl, NavbarLi, NavbarLink, NavbarA } from '../styles/styled'

const AppNav = () => {
    return (
        <NavbarDiv>
            <Heading>
                <NavbarA href='https://bw2medcabinet.netlify.app'>Medical Cabinet</NavbarA>
            </Heading>
            <NavbarUl>
                <NavbarLi>
                    <NavbarLink to='/'>Home</NavbarLink>
                </NavbarLi>

                <NavbarLi>
                    <NavbarLink to='/login'>Login</NavbarLink>
                </NavbarLi>
                    
                <NavbarLi>
                    <NavbarLink to='/register'>Register</NavbarLink>
                </NavbarLi>
            </NavbarUl>
        </NavbarDiv>
    )
}

export default AppNav
