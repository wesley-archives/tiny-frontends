import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <>
      <Header />
      <main>
        <TodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
