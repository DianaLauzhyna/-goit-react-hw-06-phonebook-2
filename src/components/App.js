import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import {SectionMain, SectionHeader} from './Section/Section';
import Filter from './Filter/Filter';

import { Wrapper } from './App.styled';


function App() {
  return (
    <Wrapper>
   <SectionMain title="PhoneBook">
      <Form />
      </SectionMain>
      <SectionHeader title="Contacts"/>
        <Filter />
        <Contacts />
    </Wrapper>
  );
}

export { App };
