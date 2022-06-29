import React, { useState, useEffect } from "react";
import Form from "./Components/pizza-form";
import Home from "./Components/home";
import * as yup from 'yup';
import schema from './validation/formSchema';
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";



const initialFormValues = {
  name: '',
  size: '',
  extraCheese: false,
  pepperoni: false,
  onions: false,
  mushrooms: false,
  special: ''
}

const initialFormErrors = {
  name: ''
}
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ""}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value})
  }

  const formSubmit = () => {
    axios.post(`https://reqres.in/api/orders`, formValues)
      .then(res => {
        console.log(res)

      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      
      <nav>
      <Link to="/">Home</Link>
      <Link to="/pizza">Order Pizza</Link>
      </nav>
      <h1>Lambda Eats</h1>
      <div>
      
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/pizza">
        <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      
      </div>
    </>
  );
};
export default App;
