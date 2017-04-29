import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../../actions";
import { Todo } from "../todo";
import TextField from "material-ui/TextField";


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
      <TextField hintText="Add Todo" fullWidth={true} onKeyDown={handleKeyDown} />
      {todos.map(todo =>
        <Todo key={todo.get("id")} todo={todo} handleClick={handleClick(todo.get("id"))} />
      )}
    </div>
  );
});
