const staysReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_REGION":
      return state.filter((stay) =>
        stay.city.toLowerCase().includes(action.payload)
      );

    case "FILTER_GUESTS":
      return state.filter((stay) => stay.maxGuests >= action.payload);
    case "FILTERED_GUESTS":
      return [...action.payload];
    default:
      return state;
  }
};

export default staysReducer;
