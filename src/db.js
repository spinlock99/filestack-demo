import Dexie from "dexie";

const db = new Dexie("TodoPWA");
db.version(1).stores({ todos: "++id, isDone" });

export default db;
