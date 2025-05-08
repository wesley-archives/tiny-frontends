import { useState, useEffect } from "react";
import { getTodos, saveTodos, createTodo } from "../services/TodoService";

export function useTodos() {
    const [todos, setTodos] = useState(getTodos);

    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    function addTodo(title) {
        const newTodo = createTodo(title);
        setTodos((current) => [...current, newTodo]);
    }

    function toggleTodo(id, completed) {
        setTodos((current) =>
            current.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo
            )
        );
    }

    function deleteTodo(id) {
        setTodos((current) => current.filter((todo) => todo.id !== id));
    }

    return { todos, addTodo, toggleTodo, deleteTodo };
}
