import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [ {id:'1', todo: 'newTask'}]
}

export const todoSlice = createSlice({
    
    //this name will be used further on so keep it meaningfull
    name:'todo',

    //here we will define an initial state which the object will have
    initialState,

    // here we define the meathods that will be available to all
    // they can be defined outside this file and they will be updated everywhere
    // like a global function

    // unlike context, we will write their definition as well here 
    reducers:{

        //inside we will get state and action, these are syntax
        // state will give us access of the data in our current state
        // action will give us the parameters passed as input e.g. id passed for deletion of task
         
        addTodo: (state, action) => {

            //create a todo, usign the data passed through action
            const todo = {
                id: nanoid(),
                todo: action.payload
            }

            //now push that todo into the array of todo we created in the initial state
            state.todos.push(todo);
        },

        deleteTodo: (state, action) =>{
            
            //in this we will recieve the id through the action payload and then
            //loop through the array of todos to find that todo to delete it

            const idToRem = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== idToRem)
        }

    }
})

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer