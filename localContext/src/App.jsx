import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './contexts';

function App() {

  const [todos, setTodos] = useState([]); 

  const addTodo = (todo) => {
    setTodos( (prev) => [{id : Date.now(),completed:false, ...todo}, ...prev] ) 
  }

  const updateTodo = (id, todo) => {
    
    // if id matches then set curr todo to passed todo
    // else set curr todo to curr todo
     setTodos( (todoList) => todoList.map( (eachTodo) =>{
            if(eachTodo.id === id) todo
            else eachTodo
          }
        )
      )
  }

  const deleteTodo = (id) => {
      setTodos( (prev) =>  prev.filter((todo) => todo.id !== id ))
  }

  const toggleComplete = (id) =>{

      setTodos( (tdlist) => tdlist.map( (eachTodo) => {
      
        if(eachTodo.id === id){ return {...eachTodo, completed: !prev } }
        else eachTodo
      
      }
    ))
  }



  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos) 
    }
     
  },[])

  //update local storage whenever todos are added or updated
  useEffect( ()=>{
      localStorage.setItem('todos',JSON.stringify(todos) )
  },[todos])

  return (
    <Todoprovider value={ {todos, addTodo, updateTodo, deleteTodo, toggleComplete} }>
      <div className="bg-black min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
                    <h1 className="text-4xl  font-thin text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </ Todoprovider >
  )
}

export default App
