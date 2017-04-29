import React from "react";
import { connect } from "react-redux";
import { Todo } from "../todo";
import { addTodo, toggleTodo } from "../../actions";

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(({ todos, toggleTodo, addTodo }) => {
  const handleClick = id => event => toggleTodo(id);
  const handleKeyDown = event => {
    // eject if the key press is not return or the value is empty
    if (event.which !== 13 || event.target.value.length <= 0) { return null };

    addTodo(event.target.value);
    event.target.value = '';
  };

  return (
    <div className="todo">
      <input type="text" placeholder="Add Todo" onKeyDown={handleKeyDown} />
      <ul>
        {todos.map(todo =>
          <li key={todo.get("id")} onClick={handleClick(todo.get("id"))}>
            <Todo todo={todo} />
          </li>
        )}
      </ul>
    </div>
  );
});
