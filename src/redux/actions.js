export const ADD_APPLICANT = 'ADD_APPLICANT';
export const REMOVE_APPLICANT = 'REMOVE_APPLICANT';
export const EDIT_APPLICANT = 'EDIT_APPLICANT';
export const CLEAR = 'CLEAR';

export const addApplicant = (applicant) => ({ type: ADD_APPLICANT, applicant });

export const removeApplicant = (index) => ({ type: REMOVE_APPLICANT, index });

export const editApplicant = (applicant) => ({
  type: EDIT_APPLICANT,
  applicant,
});

export const clearAllApplicants = () => ({ type: CLEAR });

export const clear = () => {
  return { type: CLEAR };
};
