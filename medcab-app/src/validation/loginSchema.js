
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup
      .string()
      .required("Please enter a valid username."),
    password: Yup
      .string()
      .required('Invalid credentials'),
  })
  
  export default formSchema