import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { PhonebookSection } from './Phonebook.styled';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookSection>
      <h2 className="title">Phonebook</h2>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </PhonebookSection>
  );
}
