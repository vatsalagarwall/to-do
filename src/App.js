import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
