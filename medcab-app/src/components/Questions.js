/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleP, StyleLabel, StyleInput, ContainerFormDiv, StyleBtns, FormHeading } from '../styles/styled'
import QuestionInput from './QuestionInput';
import axios from 'axios'

const initialSymptoms= [
    {name:'Symptom 1',value:''},
    {name:'Symptom 2',value:''},
    {name:'Symptom 3',value:''},
    {name:'Symptom 4',value:''},
    {name:'Symptom 5',value:''}
]
const Questions = props => {
    const [ symptoms, setSymptoms ] = useState(initialSymptoms)
    const history=useHistory()

    const symptomHandler = e => {
        const {name, value} = e.target
        const symptomIndex = symptoms.findIndex(element => element.name === name )
        let updatedSymptoms = [...symptoms]
        updatedSymptoms[symptomIndex] = {...updatedSymptoms[symptomIndex], value: value}
        setSymptoms(updatedSymptoms)
    } 
    const symptomSubmit = e => {
        e.preventDefault()
        const symValues = symptoms.filter(symptom => symptom.value.length > 0)
                                    .map(symptom => symptom.value)
                                    .join(', ')
        console.log(symValues)
        //Get the resulting strain from endpoint
        axios.get(`https://medcab2.herokuapp.com/otherapis/strainmodel/${symValues}`, 
            {
                headers: {
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`
                }
            }
            )
            .then(res=> console.log(res))
            .catch(err => console.log(err))
            .finally(()=> setSymptoms(initialSymptoms))
    }

    return (
        <ContainerFormDiv>
            <FormHeading>Please select at least 1 symptom:</FormHeading>
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
