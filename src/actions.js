import db from "./db";

export function addTodo(text) {
  return dispatch => {
    const todo = { text, isDone: false };
    db.table("todos").add(todo).then(id => {
      dispatch(addToRedux({ id, text }));
    });
  };
}
function addToRedux({ id, text }) {
  return(
    {
      type: "ADD_TODO",
      payload: {
        id,
        isDone: false,
        text: text
      }
    }
  );
}

export function toggleTodo(id, isDone) {
  return dispatch => {
    db.table("todos").update(id, { isDone: !isDone }).then(() => {
      dispatch(toggleInRedux(id));
    });
  };
}

function toggleInRedux(id) {
  return {
    type: "TOGGLE_TODO",
    payload: id
  };
}

export function clearTodos() {
  return dispatch => {
    db.todos.filter(todo => todo.isDone).delete().then(
      () => dispatch(clearInRedux())
    );
  };
}

function clearInRedux() {
  return {
    type: "CLEAR_TODOS"
  };
}
