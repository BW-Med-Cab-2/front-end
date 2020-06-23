import React from 'react';
import { StyleP, StyleLabel, StyleInput, ContainerFormDiv, StyleBtns } from '../styles/styled'

const Register = props => {
    const {
        onInput,
        onSubmit,
        disabled,
        register,
        errors
    } = props
    
    return (
        <div>
            <StyleP>Register</StyleP>
            <ContainerFormDiv onSubmit={onSubmit} disabled={disabled}>
                <StyleLabel>Username:&nbsp;
                    <StyleInput 
                        type='text'
                        name='username'
                        placeholder='Enter Username'
                        value={register.username}
                        onChange={onInput}                            
                    />
                </StyleLabel>
                <StyleP>{errors.username}</StyleP>

                <StyleLabel>Email:&nbsp;
                    <StyleInput
                        type='text'
                        name='primaryemail'
                        placeholder='Enter Email'
                        value={register.primaryemail}
                        onChange={onInput}
                    />
                </StyleLabel>
                <StyleP>{errors.primaryemail}</StyleP>

                <StyleLabel>Password:&nbsp;
                    <StyleInput 
                        type='text'
                        name='password'
                        placeholder='Enter Password'
                        value={register.password}
                        onChange={onInput}
                    />
                </StyleLabel>
                <StyleP>{errors.password}</StyleP>

                <StyleBtns>Register</StyleBtns>
            </ContainerFormDiv>
        </div>
    )
}

export default Register