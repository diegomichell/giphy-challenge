import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput';


const SearchGiftForm = ({ handleSubmit }) => {

  return (
    <View style={{ width: '100%', flexDirection: 'row', padding: 5, justifyContent: 'space-between'  }}>
      <Field
        name='search'
        placeholder='Search gif...'
        component={FormInput}
      />
      <Button title='Search' style={{ marginLeft: 5 }} onPress={handleSubmit} />
    </View>
  );
};


export default reduxForm({
  form: 'search-gift-form'
})(SearchGiftForm as any);
