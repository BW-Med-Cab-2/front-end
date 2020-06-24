/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyleP, StyleLabel, StyleInput, ContainerFormDiv, StyleBtns } from '../styles/styled'
import QuestionInput from './QuestionInput';

const initialSymptoms= [
    {name:'Symptom 1',value:''},
    {name:'Symptom 2',value:''},
    {name:'Symptom 3',value:''},
    {name:'Symptom 4',value:''},
    {name:'Symptom 5',value:''}
]

const Questions = props => {
    const [ symptoms, setSymptoms ] = useState(initialSymptoms)
    console.log(symptoms)

    const symptomHandler = e => {
        const {name, value} = e.target

        const symptomIndex = symptoms.findIndex(element => element.name == name )
        let updatedSymptoms = [...symptoms]

        updatedSymptoms[symptomIndex] = {...updatedSymptoms[symptomIndex], value: value}

        setSymptoms(updatedSymptoms)
      } 

    return (
        <ContainerFormDiv>
            <StyleP>Please select at least 1 symptom:</StyleP>
            <form>
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
            </form>
        </ContainerFormDiv>
    )
}

export default Questions