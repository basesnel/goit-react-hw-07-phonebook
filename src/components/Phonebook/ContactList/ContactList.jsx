import { ContactListGetUp } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../../redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const buttonHandleDeleteContact = (event, contactId) => {
    handleDeleteContact(contactId);
    event.target.disabled = true;
    event.target.innerText = 'Deleting...';
  };

  return (
    <ContactListGetUp>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id} className="contact__item">
          <span className="contact__name">{name}</span>
          <span>{phone}</span>
          <button
            onClick={event => buttonHandleDeleteContact(event, id)}
            className="contact__button"
          >
            Delete
          </button>
        </li>
      ))}
    </ContactListGetUp>
  );
};

export default ContactList;
