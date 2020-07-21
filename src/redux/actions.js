export const ADD_APPLICANT = 'ADD_APPLICANT';
export const REMOVE_APPLICANT = 'REMOVE_APPLICANT';
export const CLEAR = 'CLEAR';

export const addApplicant = (applicant) => {
  return { type: ADD_APPLICANT, applicant };
};

export const removeApplicant = (index) => {
  return { type: REMOVE_APPLICANT, index };
};

export const clear = () => {
  return { type: CLEAR };
};
