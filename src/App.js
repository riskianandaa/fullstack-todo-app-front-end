import './App.css';
import {useState, useEffect} from 'react'
import ToDo from './components/ToDo';
import { addToDo, deleteToDo, getAllTodo, updateToDo } from './utils/HandleApi';

function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDo" value={text} onChange={(e) => setText(e.target.value)} />
          <div className='add' 
            onClick={isUpdating ? () => updateToDo(toDoId, text, setTodo, setText, setIsUpdating) : () => addToDo(text, setText, setTodo)}>
            {
              isUpdating ? "Update" : "Add"
            } 
          </div>
        </div>
        <div className='list' >
          {todo.map((item) => 
            <ToDo 
              key={item._id} 
              text={item.text} 
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setTodo) }
            />
          )}
        </div>
      </div>
    </div>

  );
}

export default App;
