const organisation = (state = { id: 1, donations: [] }, action) => {
  switch (action.type) {
    case 'SET_ORGANISATION_DONATIONS':
      return Object.assign({}, state,
        {
          donations: action.donations,
        });
    default:
      return state;
  }
};

export default organisation;
