import { createSelector } from '@reduxjs/toolkit';

const loading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const error = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizFilter),
    );
  },
);

const selectors = {
  loading,
  getAllContacts,
  getVisibleContacts,
  getFilter,
  error,
};

export default selectors;
