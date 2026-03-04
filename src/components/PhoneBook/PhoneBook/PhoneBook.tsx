import { ChangeEvent, Component, FormEvent } from 'react';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContsctList';
import Container from '../Styled/Container.styled';
import Title from '../Styled/Title.styled';
import MiniTitle from '../Styled/MiniTitle.styled';
import { nanoid } from 'nanoid';

type Contact = {
  id: string;
  name: string;
  number: string;
};

type SrtingsKeys = 'name' | 'number' | 'filter';

interface PhonebookState {
  contacts: Contact[];
  filter: string;
  name: string;
  number: string;
  showDeleted: boolean;
}

class Phonebook extends Component<{}, PhonebookState> {
  state: PhonebookState = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
    showDeleted: false,
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
      case 'number':
      case 'filter':
    }
    this.setState({ [name]: value } as unknown as Pick<
      PhonebookState,
      SrtingsKeys
    >);
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, contacts } = this.state;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  deleteContact = (id: string) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filter = (value: string) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter, showDeleted, name, number } = this.state;
    const filteredContacts = showDeleted
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <MiniTitle>Contacts</MiniTitle>
        <Filter value={filter} onChange={this.filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default Phonebook;
