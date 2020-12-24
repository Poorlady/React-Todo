import React from "react";
import { toogleTodo } from "../actions/todoActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ToDo({ todo, toogleTodo }) {
  const isCompleted = todo.isCompleted ? "done" : "not-done";
  return (
    <div
      onClick={() => toogleTodo(todo.id)}
      className={`container todo-item ${isCompleted}`}
    >
      <h4>{todo.text}</h4>
      <div className="todo-item__option">
        {!todo.isCompleted ? <p>🖐</p> : <p>👌</p>}
      </div>
    </div>
  );
}

ToDo.propTypes = {
  todo: PropTypes.object.isRequired,
};

const mapDispatchToProps = { toogleTodo };

export default connect(null, mapDispatchToProps)(ToDo);
