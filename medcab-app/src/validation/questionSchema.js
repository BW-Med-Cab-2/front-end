import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    'Symptom 1': Yup
        .string()
        .oneOf([
            'Depression',
            'Insomnia',
            'Pain',
            'Stress',
            'Lack of Appetite',
            'Nausea',
            'Headaches',
            'Cramps',
            'Fatigue',
            'Muscle Spasms',
            'Eye Pressure',
            'Inflammation',
            'Seizures',
            'Spasticity',
            'Headache'
            ], 'Please select a Symptom'),
    'Symptom 2': Yup
    .string(),
    'Symptom 3': Yup
    .string(),
    'Symptom 4': Yup
    .string(),
    'Symptom 5': Yup
    .string(),
  })
  
  export default formSchema