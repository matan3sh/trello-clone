const gDefaultLists = [
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
];

function getDefaultData() {
  return gDefaultLists;
}

export default {
  getDefaultData,
};
