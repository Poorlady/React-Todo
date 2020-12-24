import { FILTER_VISIBILITY } from "./types";

export const filterVisibility = (filter) => {
  return {
    type: FILTER_VISIBILITY,
    payload: filter,
  };
};
