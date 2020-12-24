import React, { useEffect } from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTodo } from "../actions/todoActions";
import { getFiltered } from "../reducers/selector";

function ToDoList({ getTodo, todos }) {
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="todolist">
      {todos.length > 0 ? (
        todos.map((todo) => <ToDo key={todo.id} todo={todo} />)
      ) : (
        <h4 className="notodo">Nothing to do, Yay! 🎉</h4>
      )}
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { filter } = state.filter;
  const todos = getFiltered(state.todo.todos, filter);
  return { todos };
};

const mapDispatchToProps = { getTodo };

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
