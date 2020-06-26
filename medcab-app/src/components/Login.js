/* eslint-disable no-unused-vars */

import React from 'react';
import { StyleP, ContainerFormDiv, StyleLabel, StyleInput, StyleBtns, FormHeading } from '../styles/styled'


const Login = props => {
    const {
        onInput,
        onSubmit,
        disabled,
        login,
        errors
    } = props
    return (
        <div>
            <FormHeading>Login</FormHeading>
            <ContainerFormDiv>
                <form  onSubmit={onSubmit} >
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
                            type='password'
                            name='password'
                            value={login.password}
                            onChange={onInput}
                        />
                    </StyleLabel>
                    <StyleP>{errors.password}</StyleP>
                    <StyleBtns id='LoginBtn' disabled={disabled}>Log In</StyleBtns>
                </form>
            </ContainerFormDiv>
        </div>
    )
}

export default Login
