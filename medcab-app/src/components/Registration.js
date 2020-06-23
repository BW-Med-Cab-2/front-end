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
            <ContainerFormDiv >
                <form onSubmit={onSubmit} >
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
                            type='email'
                            name='primaryemail'
                            placeholder='Enter Email'
                            value={register.primaryemail}
                            onChange={onInput}
                        />
                    </StyleLabel>
                    <StyleP>{errors.primaryemail}</StyleP>

                    <StyleLabel>Password:&nbsp;
                        <StyleInput 
                            type='password'
                            name='password'
                            placeholder='Enter Password'
                            value={register.password}
                            onChange={onInput}
                        />
                    </StyleLabel>
                    <StyleP>{errors.password}</StyleP>

                    <StyleBtns id='RegisterBtn' disabled={disabled}>Register</StyleBtns>
                </form>
            </ContainerFormDiv>
        </div>
    )
}

export default Register