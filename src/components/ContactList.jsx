import React from 'react';
import styles from './ContactList.module.css';
import { ContactCard } from './ContactCard';

export const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  return (
    <div className={styles.main}>
      <div className='ui celled list'>
        {props.contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHandler={deleteContactHandler}
            updateContactHandler={props.updateContactHandler}
          />
        ))}
      </div>
    </div>
  );
};
