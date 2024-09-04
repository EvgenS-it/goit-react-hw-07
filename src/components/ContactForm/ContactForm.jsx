import css from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';

// for Yup
const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  contactNumber: Yup.string()
    .matches(phoneRegExp, "Valid phone number is 'xxx-xx-xx'")
    .required('Required'),
});

// for Formik
const INITIAL_VALUES = {
  contactName: '',
  contactNumber: '',
};

const ContactForm = () => {
  const { form, label, title, input, btn, errorText } = css;

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      number: values.contactNumber,
    };

    const finalContact = {
      ...contactObject,
      id: nanoid(),
    };

    dispatch(addContact(finalContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      {() => {
        return (
          <Form className={form}>
            <label className={label}>
              <span className={title}>Name</span>
              <Field
                className={input}
                type="text"
                name="contactName"
                required
              />
              <ErrorMessage
                name="contactName"
                component="span"
                className={errorText}
              />
            </label>
            <label className={label}>
              <span className={title}>Number</span>
              <Field
                className={input}
                type="tel"
                name="contactNumber"
                required
              />
              <ErrorMessage
                name="contactNumber"
                component="span"
                className={errorText}
              />
            </label>

            <button type="submit" className={btn}>
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
