import React from 'react';
import { TextInput } from 'react-native';


const FormInput = ({input, placeholder}) => {
  return (
    <TextInput style={{flex: 1, width: '100%'}} placeholder={placeholder} {...input} />
  )
};


export default FormInput;
