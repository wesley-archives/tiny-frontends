// services/todoService.js
const STORAGE_KEY = "ITEMS";

export function getTodos() {
    const localItems = localStorage.getItem(STORAGE_KEY);
    return localItems ? JSON.parse(localItems) : [];
}

export function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function createTodo(title) {
    return {
        id: crypto.randomUUID(),
        title,
        completed: false,
    };
}
