import storageService from '../services/storageService';

const initialState = {
  lists: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LISTS':
      return {
        ...state,
        lists: action.payload,
      };
    case 'ADD_LIST':
      const updatedLists = [...state.lists, action.payload];
      storageService.store('lists', updatedLists);
      return {
        ...state,
        lists: updatedLists,
      };
    case 'ADD_ITEM':
      const updatedCardsInLists = state.lists.map((list) =>
        list.id === action.payload.listId
          ? { ...list, cards: [...list.cards, action.payload.item] }
          : list
      );
      storageService.store('lists', updatedCardsInLists);
      return {
        ...state,
        lists: updatedCardsInLists,
      };
    case 'DRAG_RESULT':
      const copyLists = [...state.lists];
      // Dragging lists around
      if (action.payload.type === 'list') {
        const list = copyLists.splice(action.payload.droppableIndexStart, 1);
        copyLists.splice(action.payload.droppableIndexEnd, 0, ...list);
      } else if (
        action.payload.droppableIdStart === action.payload.droppableIdEnd
      ) {
        // Same List
        const list = state.lists.find(
          (list) => action.payload.droppableIdStart === list.id
        );
        const item = list.cards.splice(action.payload.droppableIndexStart, 1);
        list.cards.splice(action.payload.droppableIndexEnd, 0, ...item);
      }
      // Diffrent List
      else {
        // Find the list where drag happened
        const listStart = state.lists.find(
          (list) => action.payload.droppableIdStart === list.id
        );
        // Pull out the item from this list
        const item = listStart.cards.splice(
          action.payload.droppableIndexStart,
          1
        );
        // Find the list where drag ended
        const listEnd = state.lists.find(
          (list) => action.payload.droppableIdEnd === list.id
        );
        // Put the item in the new list
        listEnd.cards.splice(action.payload.droppableIndexEnd, 0, ...item);
      }
      storageService.store('lists', copyLists);
      return {
        ...state,
        lists: copyLists,
      };
    default:
      return state;
  }
}
