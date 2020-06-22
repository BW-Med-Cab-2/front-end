import React from 'react';
import { StyleP, StyleLabel, StyleInput, ContainerFormDiv, StyleBtns } from '../styles/styled'

const Register = () => {
    return (
        <div>
            <StyleP>Register</StyleP>
            <ContainerFormDiv>
                <StyleLabel>Username:&nbsp;
                    <StyleInput 
                        type='text'
                        name='username'
                    />
                </StyleLabel>

                <StyleLabel>Email:&nbsp;
                    <StyleInput
                        type='text'
                        name='primaryemail'
                    />
                </StyleLabel>
                <StyleLabel>Password:&nbsp;
                    <StyleInput 
                        type='text'
                        name='password'
                    />
                </StyleLabel>
                <StyleBtns>Register</StyleBtns>
            </ContainerFormDiv>
        </div>
    )
}

export default Register