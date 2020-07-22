import {
  ADD_APPLICANT,
  REMOVE_APPLICANT,
  CLEAR,
  EDIT_APPLICANT,
} from '../actions';

const initialState = JSON.parse(localStorage.getItem('applicants')) || {
  applicants: [],
};

const rootReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_APPLICANT:
      newState = {
        applicants: [...state.applicants, action.applicant],
      };
      localStorage.setItem('applicants', JSON.stringify(newState));
      return newState;
    case REMOVE_APPLICANT:
      const { index } = action;
      const { applicants } = state;
      newState = {
        applicants: applicants.filter((app) => app !== applicants[index]),
      };
      localStorage.setItem('applicants', JSON.stringify(newState));
      return newState;
    case EDIT_APPLICANT:
      const { applicant } = action;
      const { value, index: i } = applicant;
      const replacedApplicants = [...state.applicants];
      replacedApplicants[i] = value;
      newState = {
        applicants: replacedApplicants,
      };
      localStorage.setItem('applicants', JSON.stringify(newState));
      return newState;
    case CLEAR:
      newState = {
        applicants: [],
      };
      localStorage.setItem('applicants', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
