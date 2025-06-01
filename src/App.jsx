import "./App.css";
import TodoList from "./components/todolist";

function App() {
  return (
    <>
      <h1 className="heading">Todoist</h1>
      <div className="container">
        <TodoList />
      </div>
    </>
  );
}

export default App;
