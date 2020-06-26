/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleP, StyleLabel, StyleInput, ContainerFormDiv, StyleBtns, FormHeading } from '../styles/styled'
import QuestionInput from './QuestionInput';

const Questions = props => {
    const { onInput, onSubmit, symptoms } = props;

    return (
        <ContainerFormDiv>
            <FormHeading>Please select at least 1 symptom:</FormHeading>
            <form onSubmit={onSubmit}>
                {symptoms.map(question => {
                    return (
                        <QuestionInput 
                            key={question.name}
                            label={question.name} 
                            value={question.value} 
                            onChange={onInput}
                            />)
                    })
                }
                <StyleBtns disabled={false}>Find Your Strain!</StyleBtns>
            </form>
        </ContainerFormDiv>
    )
}

export default Questions
