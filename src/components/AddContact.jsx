import React, { useState } from 'react';
import styles from './AddContact.module.css';

export const AddContact = ({ addContactHandler }) => {
  const initialState = {
    name: "",
    email: "",
  };

  const [contact, setContact] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All the Fields are Mandatory!!!");
      return;
    }
    addContactHandler(contact);
    setContact(initialState);
  };

  return (
    <div className={styles.main}>
      <h2>Add Contacts</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id='name'
            placeholder='Enter your name'
            className={styles.input}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            value={contact.name}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id='email'
            placeholder='Enter your email'
            className={styles.input}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            value={contact.email}
          />
        </div>
        <button type="submit" className={styles.btn}>Add</button>
      </form>
    </div>
  );
};
