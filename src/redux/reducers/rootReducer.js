import { ADD_APPLICANT, REMOVE_APPLICANT, CLEAR } from '../actions';

const initialState = JSON.parse(localStorage.getItem('applicants')) || {
  applicants: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPLICANT:
      const newState = {
        applicants: [...state.applicants, action.applicant],
      };
      localStorage.setItem('applicants', JSON.stringify(newState));
      return newState;
    case REMOVE_APPLICANT:
      console.log(
        state.applicants.filter((applicant) => applicant !== action.index)
      );
    // const newState = {
    //   applicants: state.applicants
    // }
    default:
      return state;
  }
};

export default rootReducer;
