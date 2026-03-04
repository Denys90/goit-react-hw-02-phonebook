import React from 'react';
import List from '../Styled/List.srtled';
import { MdDeleteForever } from 'react-icons/md';

type Contact = {
  id: string;
  name: string;
  number: string;
};

type ContactsProps = {
  contacts: Contact[];
  deleteContact: (id: string) => void;
};

function ContactList({ contacts, deleteContact }: ContactsProps) {
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deleteContact(contact.id)}>
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
