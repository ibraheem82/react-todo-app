
import './App.css';
import ToDoMenu from './components/ToDoMenu';

function App() {
  return (
    <div className="App bg-red-500 h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-pink-300 text-white">
      <h1 className="text-violet-900 mb-8 text-5xl pt-12 font-bold">Todo List App 📃</h1>

      <ToDoMenu />
    </div>
  );
}

export default App;
