import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup
      .string()
      .min(6, "Usermame must be at least 6 characters long.")
      .max(15, 'Username may be no longer than 15 characters.')
      .required("Please enter a valid username."),
      email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required('Must include password.')
      .min(8, "Passwords must contain at least 8 characters.")
      .matches(/[a-zA-Z0-9]/, 'Password can only contain alphanumeric characters.')
  })
  
  export default formSchema