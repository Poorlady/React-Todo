import { GET_TODO, ADD_TODO, TOGGLE_TODO } from "./types";

export const getTodo = () => {
  return {
    type: GET_TODO,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toogleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
