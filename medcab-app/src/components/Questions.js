/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleP, StyleLabel, StyleInput, ContainerFormDiv, StyleBtns } from '../styles/styled'
import QuestionInput from './QuestionInput';
import * as Yup from 'yup'

const initialSymptoms= [
    {name:'Symptom 1',value:''},
    {name:'Symptom 2',value:''},
    {name:'Symptom 3',value:''},
    {name:'Symptom 4',value:''},
    {name:'Symptom 5',value:''}
]
const Questions = props => {
    const [ symptoms, setSymptoms ] = useState(initialSymptoms)

    const symptomHandler = e => {
        const {name, value} = e.target
        const symptomIndex = symptoms.findIndex(element => element.name === name )
        let updatedSymptoms = [...symptoms]
        updatedSymptoms[symptomIndex] = {...updatedSymptoms[symptomIndex], value: value}
        setSymptoms(updatedSymptoms)
    } 
    const symptomSubmit = e => {
        e.preventDefault()

        //Need to map through the symptoms array
        const symValues = symptoms.filter(symptom => symptom.value.length > 0).map(symptom => symptom.value).join(', ')

        console.log(symValues)
        //Join the filtered array with (', ') for result of value, value, etc.
        //Post the resulting string to desired endpoint
    }

    return (
        <ContainerFormDiv>
            <StyleP>Please select at least 1 symptom:</StyleP>
            <form onSubmit={symptomSubmit}>
                {symptoms.map(question => {
                    return (
                        <QuestionInput 
                            key={question.name}
                            label={question.name} 
                            value={question.value} 
                            onChange={symptomHandler}
                            />)
                    })
                }
                <StyleBtns disabled={false}>Find Your Strain!</StyleBtns>
            </form>
        </ContainerFormDiv>
    )
}

export default Questions