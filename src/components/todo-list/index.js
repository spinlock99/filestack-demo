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
)(function ({ todos, toggleTodo, addTodo }) {
  const onSubmit = event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);

  return (
    <div className="todo">
      <input type="text" placeholder="Add Todo" onKeyDown={onSubmit} />
      <ul>
        {todos.map(todo =>
          <li key={todo.get("id")} onClick={toggleClick(todo.get("id"))}>
            <Todo todo={todo} />
          </li>
        )}
      </ul>
    </div>
  );
});
