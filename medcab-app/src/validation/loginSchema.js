
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup
      .string()
      .min(3, "Usermame must be at least 3 characters long.")
      .required("Please enter a valid name."),
    password: Yup
      .string()
      .min(8, "Passwords must contain at least 8 characters."),
  })
  
  export default formSchema