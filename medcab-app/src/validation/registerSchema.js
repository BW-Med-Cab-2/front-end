import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup
      .string()
      .min(6, "Username must be at least 6 characters long.")
      .max(15, 'Username may be no longer than 15 characters.')
      .matches(/^\w+$/, 'Username can only contain alphanumeric characters.')
      .required("Please enter a valid username."),
    primaryemail: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required('Must include password.')
      .min(8, "Password must contain at least 8 characters.")
      .matches(/(?=.*\d)/, 'Password must contain at least one number.')
  })
  
  export default formSchema