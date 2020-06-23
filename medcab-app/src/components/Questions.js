/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleP, StyleLabel, StyleInput, ContainerFormDiv, StyleBtns } from '../styles/styled'
import QuestionInput from './QuestionInput';

const Questions = props => {


    return (
        <ContainerFormDiv>
            <StyleP>Please select at least 3 symptoms:</StyleP>
            <form>
                <QuestionInput />
                <QuestionInput />
                <QuestionInput />
                <QuestionInput />
                <QuestionInput />
            </form>
        </ContainerFormDiv>
    )
}

export default Questions