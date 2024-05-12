import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return contacts;
  }
};

export default function ContactList () {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, filter);
  
  return (
    <ul className={css.contactList}>
       {visibleContacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              {...contact} />
          </li>
        );
      })}
    </ul>
  );
};

