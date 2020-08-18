import service from '../services/service';
import { Storage } from '../services/storageService';

const COLLECTION = 'lists';

export const addList = (title) => async (dispatch) => {
  try {
    const list = { title, id: service.makeId(), cards: [] };
    dispatch({ type: 'ADD_LIST', payload: list });
  } catch (err) {
    console.log(err);
  }
};

export const addItem = (text, listId) => async (dispatch) => {
  try {
    const item = { text, id: service.makeId() };
    dispatch({ type: 'ADD_ITEM', payload: { listId, item } });
  } catch (err) {
    console.log(err);
  }
};

export const sort = (properties) => async (dispatch) => {
  try {
    dispatch({ type: 'DRAG_RESULT', payload: { ...properties } });
  } catch (err) {
    console.log(err);
  }
};

export const loadContacts = (filter = '') => async (dispatch) => {
  try {
    let res = Storage.loadFromStorage(COLLECTION);
    if (!res) {
      res = await service.query();
      Storage.storeToStorage(COLLECTION, res);
    }
    const contacts = res.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    dispatch({ type: 'SET_CONTACTS', payload: contacts });
  } catch (err) {
    console.log(err);
  }
};
