//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {HomePage} from './components/Home.js';
import {BrowsePage} from './components/Browse.js';
function App() {
  const [clients, setClients] = useState(false);
  const [user,setUser]=useState(false);
  
  function getClients() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setClients(data);
      });
  }

  function createClient() {
    let name = prompt('Enter client name');
    let email = prompt('Enter client email');
    let password = prompt('Enter client password');
    fetch('http://localhost:3001/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email,password}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        if (data>0) {
          setUser(parseInt(data));
          localStorage.setItem("user",data);
        }
      });
  }

  function deleteClient() {
    let id = prompt('Enter client id');
    fetch(`http://localhost:3001/clients/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getClients();
      });
  }

  function updateClient() {
    let id = prompt('Enter client id');
    let name = prompt('Enter new client name');
    let email = prompt('Enter new client email');
    fetch(`http://localhost:3001/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getClients();
      });
  }
  function loginClient() {
    let email = prompt('Enter your email');
    let password = prompt('Enter password');
    fetch(`http://localhost:3001/clients/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        if (data>0) {
          setUser(parseInt(data));
          localStorage.setItem("user",data);
        }
        getClients();
      });
  }
  function signOut(){
    localStorage.setItem("user",-1);
    setUser(-1);

  }
  useEffect(()=>{
  },[])
  useEffect(() => {
    setUser(localStorage.getItem('user'));
    getClients();
  }, []);
  return (
    <div>
      {!(user>0) &&
      <HomePage loginClient={loginClient} signUp={createClient}></HomePage>}
      {user>0 &&
      <BrowsePage signOut={signOut} ></BrowsePage>}
      <button onClick={createClient}>Add client</button>
      <br />
      <button onClick={loginClient}>login client</button>
      <br />
      {user>0 &&
      <button onClick={deleteClient}>Delete client</button>}
      <br />
      {user>0 &&
      <button onClick={updateClient}>Update client</button>}
    </div>
  );
}
export default App;