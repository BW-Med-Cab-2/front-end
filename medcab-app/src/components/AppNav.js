import React from 'react';
import { Heading, NavbarDiv, NavbarUl, NavbarLi, NavbarLink } from '../styles/styled'

const AppNav = () => {
    return (
        <NavbarDiv>
            <Heading>Medical Cabinet</Heading>
            <NavbarUl>
                <NavbarLi>
                    <NavbarLink>Home</NavbarLink>
                </NavbarLi>

                <NavbarLi>
                    <NavbarLink>Login</NavbarLink>
                </NavbarLi>
                    
                <NavbarLi>
                    <NavbarLink>Register</NavbarLink>
                </NavbarLi>
            </NavbarUl>
        </NavbarDiv>
    )
}

export default AppNav