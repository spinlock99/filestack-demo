import db from "./db";

export function addTodo(text) {
  return dispatch => {
    const todo = { text, isDone: false };
    db.table("todos").add(todo).then(id => {
      dispatch(foo({ id, text }));
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
      dispatch(bar(id));
    });
  };
}

function toggleInRedux(id) {
  return {
    type: "TOGGLE_TODO",
    payload: id
  };
}
