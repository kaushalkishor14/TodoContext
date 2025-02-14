import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo 1",
            completed: false,
            date: new Date()
        }
    ],
    addTodo: (todo) => {},
    updateTodo:(id, todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},


});


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider