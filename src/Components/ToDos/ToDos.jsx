import { useState } from "react";
import React from "react";

function ToDos({todos, setTodos}){
    const [url, setUrl] = useState('http://assets.breatheco.de/apis/fake/todos/user/argelio05')
    
    const updateApiCall = async (updatedTodos) => {
    
        try {
          const fetchCall = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedTodos)
          })
          const jsonResponse = await fetchCall.json()
          console.log(jsonResponse)
        } catch (error) {
          console.error(error)
        }
      }      

    function renderTodos (){
        return todos.map((todo, key)=>{
            return (
                <div key={key}>
                    <p>{todo.label}</p>
                    <button id="deletebutton"onClick={()=>deleteTodo(todo)}>
                    <span className="material-symbols-outlined">delete_forever</span>
                    </button>           
                </div>
            )
        })
    }

    function deleteTodo(todoToDelete){
        console.log(todoToDelete)
        const updatedTodos = todos.filter((todo)=>todo !== todoToDelete )
        const emptyTodos = [{label: "no tienes todos", done: false}]
        setTodos(updatedTodos)
        if(todos.length > 1){
            updateApiCall(updatedTodos)
        } else {
            updateApiCall(emptyTodos)
        }
      }
    
    return (
        <div className="divtodo">
            {renderTodos()}
        </div>
    )
}

export default ToDos;