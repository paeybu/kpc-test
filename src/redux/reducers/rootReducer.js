const initialState = {
  applicants: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_APPLICANT':
      return {
        applicants: [...state.applicants, action.applicant],
      };
    default:
      return state;
  }
};

export default rootReducer;
