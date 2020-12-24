import { GET_TODO, ADD_TODO, TOGGLE_TODO } from "../actions/types";

const initialState = { todos: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODO:
      return { ...state };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.map((item) => {
          console.log(item);
          if (item.id === id) {
            return {
              ...item,
              isCompleted: !item.isCompleted,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
