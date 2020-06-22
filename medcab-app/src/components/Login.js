import React from 'react';
import { StyleP, ContainerFormDiv, StyleLabel, StyleInput, StyleBtns } from '../styles/styled'


const Login = () => {
    return (
        <div>
            <StyleP>Login</StyleP>
            <ContainerFormDiv>
                <StyleLabel>Username:&nbsp;
                    <StyleInput 
                        type='text'
                        name='username'
                    />
                </StyleLabel>
                <StyleLabel>Password:&nbsp;
                    <StyleInput 
                        type='text'
                        name='password'
                    />
                </StyleLabel>
                <StyleBtns>Log In</StyleBtns>
            </ContainerFormDiv>
        </div>
    )
}

export default Login