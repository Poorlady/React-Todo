import "./App.css";
import AddToDO from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import VisibilityFilter from "./components/VisibilityFilter";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <header>
          <h1>React To Do App</h1>
          <div className="underline"></div>
        </header>
        <main>
          <AddToDO />
          <div className="wrapper">
            <VisibilityFilter />
          </div>
          <ToDoList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
