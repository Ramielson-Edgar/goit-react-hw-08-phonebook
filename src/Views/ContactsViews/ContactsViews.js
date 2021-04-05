import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors } from '../../Redux';
import ContactForm from '../../Phonebook/ContactForm';
import ContactList from '../../Phonebook/ContactList';
import Filter from '../../Phonebook/Filter';
import Loader from '../../Component/loader';

const ContactsViews = ({ isLoadingContacts }) => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
      {isLoadingContacts && <Loader />}
    </>
  );
};

ContactsViews.propTypes = {
  isLoadingContacts: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.loading(state),
});

export default connect(mapStateToProps, null)(ContactsViews);
