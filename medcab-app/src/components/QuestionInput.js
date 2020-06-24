/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyleLabel, StyleSelect } from '../styles/styled'

const optionList= [
            {name:'Insomnia',value:'Insomnia'},
            {name:'Pain',value:'Pain'},
            {name:'Stress',value:'Stress'},
            {name:'Lack of Appetite',value:'Lack of Appetite'},
            {name:'Nausea',value:'Nausea'},
            {name:'Persistent Headaches',value:'Headaches'},
            {name:'Cramps',value:'Cramps'},
            {name:'Fatigue',value:'Fatigue'},
            {name:'Muscle Spasms',value:'Muscle Spasms'},
            {name:'Eye Pressure',value:'Eye Pressure'},
            {name:'Inflammation',value:'Inflammation'},
            {name:'Seizures',value:'Seizures'},
            {name:'Spasticity',value:'Spasticity'},
            {name:'Headache',value:'Headache'},
            {name:'Depression',value:'Depression'},
]



const QuestionInput = props => {
    const { label, value, onChange } = props

    return (
        <div>
            <StyleLabel>{label}:&nbsp;
                <StyleSelect
                name={label}
                value={value}
                onChange={onChange}
                >
                    <option value=''>Please Select Symptom:</option>
                        {optionList.map(ailment => {
    return <option key={ailment.name}
    value={ailment.value}>{ailment.name}</option>
    })}
                </StyleSelect>
            </StyleLabel>
        </div>
    )
}

export default QuestionInput