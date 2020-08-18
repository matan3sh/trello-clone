const initialState = {
  lists: [
    {
      title: 'Last Episode',
      id: '0egtw',
      cards: [
        {
          id: '0dgsdg',
          text: 'We Created a Static List And Static Card',
        },
        {
          id: '1sdgsdg',
          text: 'We Used a mix between material UI and Styled Components',
        },
      ],
    },
    {
      title: 'This Episode',
      id: '1dgsg',
      cards: [
        {
          id: '0xcbxcbsdg',
          text: 'We Will Create Our First Reducer',
        },
        {
          id: '1sdbsdbv',
          text: 'And Render Many Cards On Our List With Static Data',
        },
        {
          id: '2adfasdg',
          text: 'We Will Also Make A Changes',
        },
      ],
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LISTS':
      return {
        ...state,
        lists: action.payload,
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? { ...list, cards: [...list.cards, action.payload.item] }
            : list
        ),
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
      return {
        ...state,
        lists: copyLists,
      };
    default:
      return state;
  }
}
