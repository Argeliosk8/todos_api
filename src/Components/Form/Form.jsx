import React, {useState} from "react";

function Form({todos, setTodos, }){
    const [url, setUrl] = useState('http://assets.breatheco.de/apis/fake/todos/user/argelio05')
    const [newTodo, setNewTodo] = useState()
 
    
    function handleChange(e){
        setNewTodo({label: e.target.value, done: false})
      }

    function addTodo(e){
         if(newTodo.label != '' && !todos.includes(newTodo)){
          e.preventDefault()
          setTodos(prev => [...prev, newTodo])
          let apiBody = todos
          apiBody.push(newTodo)
          console.log(apiBody)
          updateApiCall(apiBody)
          document.getElementById("todoInput").value = ""
         } else {
          alert("error")
         }
      }    
        
    const updateApiCall = async (apiBody) => {
        try {
          const fetchCall = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(apiBody)
          })
          const jsonResponse = await fetchCall.json()
          console.log(jsonResponse)
        } catch (error) {
          console.error(error)
        }
      }

    return (
        <form onSubmit={addTodo}>
            <input type="text" onChange={handleChange} id='todoInput'></input>
            <button id='addbutton'>
            <span class="material-symbols-outlined">add_comment</span>
            </button>
      </form>
    )
}

export default Form;