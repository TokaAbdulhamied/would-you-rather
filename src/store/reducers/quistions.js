import { GET_QUISTIONS } from "../actioncreators/quistions";

export default function quistions(state = {}, action) {
  switch (action.type) {
    case GET_QUISTIONS:
      return { ...state, ...action.quistions };
    default:
      return state;
  }
}
