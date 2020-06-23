import React from 'react';
import { StyleP, ContainerFormDiv, StyleLabel, StyleInput, StyleBtns } from '../styles/styled'


const Login = props => {
    const {
        onInput,
        disabled,
        login,
        errors
    } = props
    return (
        <div>
            <StyleP>Login</StyleP>
            <ContainerFormDiv>
                <StyleLabel>Username:&nbsp;
                    <StyleInput 
                        type='text'
                        name='username'
                        value={login.username}
                        onChange={onInput}
                    />
                </StyleLabel>
                <StyleP>{errors.username}</StyleP>
                <StyleLabel>Password:&nbsp;
                    <StyleInput 
                        type='text'
                        name='password'
                        value={login.password}
                        onChange={onInput}
                    />
                </StyleLabel>
                <StyleP>{errors.password}</StyleP>
                <StyleBtns>Log In</StyleBtns>
            </ContainerFormDiv>
        </div>
    )
}

export default Login