import './App.css';
import './index.css';
import { Header } from './Header';
import { AddContact } from './AddContact';
import { ContactList } from './ContactList';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const updateContactHandler = (id, updatedInfo) => {
    setContacts(prevContacts => {
      return prevContacts.map(contact => {
        if (contact.id === id) {
          return { ...contact, ...updatedInfo };
        }
        return contact;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        getContactId={removeContactHandler}
        updateContactHandler={updateContactHandler}
      />
    </>
  );
}

export default App;
