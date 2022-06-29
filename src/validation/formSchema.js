import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .trim()
        .required("please select size"),
    extraCheese: yup.boolean(),
    pepperoni: yup.boolean(),
    onions: yup.boolean(),
    mushrooms: yup.boolean(),
    special: yup
        .string()
        .trim()
  })
  
  export default formSchema;