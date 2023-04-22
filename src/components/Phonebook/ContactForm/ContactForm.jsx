import { nanoid } from 'nanoid';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import ReactInputMask from 'react-input-mask';

import { ContactFormGetUp, Input } from './ContactForm.styled';
import useLocalStorage from 'components/hooks/useLocalStorage';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../../redux/selectors';
import { addContact } from 'redux/operations';

// const phoneRegExp =
//   /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const scheme = yup.object().shape({
  name: yup.string().required().min(3, 'Must be at least 3 characters'),
  phone: yup
    .string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2,3}\)?)\s?-?\s?(\(?\d{2,4}\)?)?$/,
      'Not valid, please try: 000-000-0000'
    )
    .required(),
});

export default function ContactForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [phone, setPhone] = useLocalStorage('phone', '');

  const state = { name, phone };

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const { name, phone } = data;

    const contact = {
      id: nanoid(),
      name,
      phone,
    };

    const contactName = contact.name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === contactName)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleSubmit = event => {
    formSubmitHandler(state);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Formik
      enableReinitialize
      initialValues={state}
      validationSchema={scheme}
      onSubmit={handleSubmit}
      isValid
    >
      {({ errors, touched }) => (
        <ContactFormGetUp>
          <label htmlFor={nameInputId} className="contactform__label">
            Name
            <Input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handleChange}
              id={nameInputId}
              className={
                errors.name && touched.name
                  ? 'input__error'
                  : 'contactform__input'
              }
            />
            <ErrorMessage
              name="name"
              component="div"
              className="contactform__error"
            />
          </label>
          <label htmlFor={phoneInputId} className="contactform__label">
            Phone
            <ReactInputMask
              mask="999-999-9999"
              value={phone}
              onChange={handleChange}
            >
              {() => (
                <Input
                  type="tel"
                  name="phone"
                  title="The phone must have phones and look like a template 000-000-0000."
                  id={phoneInputId}
                  className={
                    errors.name && touched.name
                      ? 'input__error'
                      : 'contactform__input'
                  }
                />
              )}
            </ReactInputMask>
            <ErrorMessage
              name="phone"
              component="div"
              className="contactform__error"
            />
          </label>
          <button type="submit" className="contactform__button">
            Add contact
          </button>
        </ContactFormGetUp>
      )}
    </Formik>
  );
}
