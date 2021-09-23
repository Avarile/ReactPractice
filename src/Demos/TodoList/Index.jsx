import React, { useRef, useState, useEffect, useReducer, useContext, createContext } from "react"


// init and config the state controls
const todoReducer = (state, action) => {
  switch (action.type){
    case "ADD_TODO":
      if(!state.todos.find(todo => todo.name === action.payload.name)){
        state.todos.push({
          ...action.payload,
          // quantity : 1 , or anyother props you want to add in 
        })
      }
      return {
        ...state,
        todos: [...state.todos],

      }
    case "DELETE_TODO":
      const newTodos = state.todos.filter( (todo) => todo.id !== action.payload.id)

    case "CLEAR_TODOS":
      // localStorage.removeItem("todos")
      return {
        todos: []

      }
  }
} 

// controller dispacther
const initState = []
const [state, dispatch] = useReducer(todosReducer, initState)
const addTodo = (todo) => { dispatch({ type: "ADD_TODO", payload: todo})}
const deleteTodo = (todo) => { dispatch({ type: "DELETE_TODO", payload: todo })}
const clearTodos = () => { dispatch( { type: "CLEAR_TODOS })}

const InputComponent = () => {
  const [input, setInput] = useState({taskName:'', deadLine:'', finished: false, memo: ''})
    
}  
