import { VISIBILITYFILTER } from "../constant";

export const getFiltered = (todos, filter) => {
  switch (filter) {
    case VISIBILITYFILTER.COMPLETED:
      return todos.filter((todo) => todo.isCompleted);
    case VISIBILITYFILTER.INCOMPLETE:
      return todos.filter((todo) => !todo.isCompleted);
    case VISIBILITYFILTER.ALL:
    default:
      return todos;
  }
};
