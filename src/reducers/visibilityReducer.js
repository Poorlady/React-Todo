import { FILTER_VISIBILITY } from "../actions/types";
import { VISIBILITYFILTER } from "../constant";

const initialState = { filter: VISIBILITYFILTER.ALL };

export default function (state = initialState, action) {
  switch (action.type) {
    case FILTER_VISIBILITY:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
