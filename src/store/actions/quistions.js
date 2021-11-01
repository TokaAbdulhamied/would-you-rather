export const GET_QUISTIONS = "GET_QUISTIONS";

export const ADD_ANSWER = "ADD_ANSWER";

export const ADD_QUISTION = "ADD_QUISTION";

export const getQuistions = (questions) => ({
  type: GET_QUISTIONS,
  questions,
});
export const addAnswer = (authedUser, qid, answer) => ({
  type: ADD_ANSWER,
  authedUser,
  qid,
  answer,
});
export const addQuistion = (question) => ({
  type: ADD_QUISTION,
  question,
});
