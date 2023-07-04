import React, {useState} from "react";

function Form({todos, setTodos, }){
    const [url, setUrl] = useState('http://assets.breatheco.de/apis/fake/todos/user/argelio05')
    const [newTodo, setNewTodo] = useState()

    const updateApiCall = async (apiUpdatedTodos) => {
      try {
        const fetchCall = await fetch(url, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(apiUpdatedTodos)
        })
        const jsonResponse = await fetchCall.json()
        console.log(jsonResponse)
      } catch (error) {
        console.error(error)
      }
    }
    
    function handleChange(e){
        setNewTodo({label: e.target.value, done: false})
      }

    function addTodo(e){
         if(newTodo.label != '' && !todos.includes(newTodo)){
          e.preventDefault()
          setTodos(prev => [...prev, newTodo])
          let apiUpdatedTodos = todos
          apiUpdatedTodos.push(newTodo)
          console.log(apiUpdatedTodos)
          updateApiCall(apiUpdatedTodos)
          document.getElementById("todoInput").value = ""
         } else {
          alert("error")
         }
      }          

    return (
        <form onSubmit={addTodo}>
            <input type="text" onChange={handleChange} id='todoInput'></input>
            <button id='addbutton'>
            <span className="material-symbols-outlined">add_comment</span>
            </button>
      </form>
    )
}

export default Form;