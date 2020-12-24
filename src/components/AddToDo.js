import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../actions/todoActions";
import { v4 as uuidv4 } from "uuid";

function AddToDO(props) {
  const [todo, setTodo] = useState("");
  const inputContainer = useRef(null);

  useEffect(() => {
    inputContainer.current.focus();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: todo,
      isCompleted: false,
    };
    props.addTodo(newTodo);
    setTodo("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="addtodo">
        <input
          type="text"
          placeholder="Add something to do"
          name="todo"
          value={todo}
          onChange={handleChange}
          ref={inputContainer}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

AddToDO.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(AddToDO);
