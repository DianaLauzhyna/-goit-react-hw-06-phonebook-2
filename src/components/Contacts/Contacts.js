import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

import { ButtonDelete, List, ListItem, ContactText } from './ContactList.styled';

const Contacts = () => {
  const contacts = useSelector(state => state.phoneBook.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(({ id, number, name }) => (
          <ListItem  key={id}>
            <ContactText>{name}: {number}</ContactText>
            <ButtonDelete
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </ButtonDelete>
          </ListItem>
        ))}
   </List>
  );
};

export default Contacts;
