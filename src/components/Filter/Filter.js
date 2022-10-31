import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/contactsSlice';

import { Label, Input, Span } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label >
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
      />
   </Label>
  );
};

export default Filter;
