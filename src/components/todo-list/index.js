import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodo, toggleTodo, clearTodos } from "../../actions";
import { Todo } from "../todo";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";


export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo, toggleTodo, clearTodos }, dispatch);
  }
)(({ todos, toggleTodo, addTodo, clearTodos }) => {
  const handleClick = (id, isDone) => event => toggleTodo(id, isDone);
  const handleKeyDown = event => {
    // eject if the key press is not return or the value is empty
    if (event.which !== 13 || event.target.value.length <= 0) { return null };

    addTodo(event.target.value);
    event.target.value = '';
  };
  const handleClear = event => clearTodos();

  return (
    <Paper>
      <div style={{ padding: "20px" }}>
        <TextField hintText="Add Todo" fullWidth={true} onKeyDown={handleKeyDown} />
        {todos.map(todo =>
          <div style={{ margin: "20px 0 20px 0" }} key={todo.get("id")}>
            <Todo  todo={todo} handleClick={handleClick(todo.get("id"), todo.get("isDone"))} />
            <Divider />
          </div>
        )}
        <RaisedButton
          label="Clear"
          secondary={true}
          fullWidth={true}
          onClick={handleClear}
        />
      </div>
    </Paper>
  );
});
