import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from 'redux/contactsSlice';

import { Button, FormInput } from './Form.styled';
import {Input, Span, Label} from '../Filter/Filter.styled';

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    formReset();
  };

  const onChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormInput   onSubmit={onSubmit}>
      <Label>
      <Span>Name</Span>
        <Input
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </Label>
      <Label >
      <Span>Number</Span>
        <Input
          value={number}
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button  type="submit">
        Add contact
      </Button>
    </FormInput >
  );
}

export default Form;
