import './App.css';
import ToDos from './Components/ToDos/ToDos';
import Form from './Components/Form/Form';
import React, {useState, useEffect} from 'react';

function App() {
  const [todos, setTodos] = useState([{label: '', done: false}])
  const [url, setUrl] = useState('http://assets.breatheco.de/apis/fake/todos/user/argelio05')
  const [getOption, setGetOption] = useState({
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  })

  const getApiCall = async () => {
    try {
      const fetchCall = await fetch(url, getOption)
      const jsonResponse = await fetchCall.json()
      setTodos(jsonResponse)
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getApiCall()
  },[])


  return (
    <div className="App">
      <h1>Your to-do's!</h1>
      <Form todos={todos} setTodos={setTodos}/>
      <ToDos todos={todos} setTodos={setTodos}/>    
    </div>
  );
}

export default App;
