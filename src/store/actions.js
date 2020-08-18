import localService from '../services/localService';

export const addList = (title) => async (dispatch) => {
  try {
    const list = { title, id: localService.makeId(), cards: [] };
    dispatch({ type: 'ADD_LIST', payload: list });
  } catch (err) {
    console.log(err);
  }
};

export const addItem = (text, listId) => async (dispatch) => {
  try {
    const item = { text, id: localService.makeId() };
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

export const loadLists = () => async (dispatch) => {
  try {
    const res = await localService.query();
    dispatch({ type: 'SET_LISTS', payload: res });
  } catch (err) {
    console.log(err);
  }
};
