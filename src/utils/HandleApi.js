import axios from 'axios'

const baseUrl = 'http://localhost:5000'

const getAllTodo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        // console.log('data...>', data)
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        // console.log(data)
        setText("")
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setTodo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then(() => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, { _id})
    .then((data) => {
        // console.log(data)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

export { getAllTodo, addToDo, updateToDo, deleteToDo }
