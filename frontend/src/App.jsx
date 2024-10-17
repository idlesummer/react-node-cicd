import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [username, setUsername] = useState(0);

  const getNames = async () => {
    const response = await axios.get('http://localhost:5000/names');
    console.log(response.data);
    setUsername(response.data);
  };
  
  useEffect(() => {
    getNames();
  }, []);

  return (
    <>
     <h1>My website</h1>
     <h3>My name is {username}</h3>
    </>
  );
}

export default App;
