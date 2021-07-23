import React from 'react';
import { TextInput } from 'react-native';


const FormInput = ({input, placeholder}) => {
  return (
    <TextInput style={{width: '100%'}} placeholder={placeholder} {...input} />
  )
};


export default FormInput;
