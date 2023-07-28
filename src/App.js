import React, {useState} from 'react';
import AddUser from './components/AddUser';
import UserList from './components/ui/UserList';
import './App.css';

function App() {

const [users,setUsers] = useState([])
  const addUserHandler = (username,age) =>{
setUsers([
  ...users, {username,age,id: Math.random().toString()}
])
  }
   return(
      <div> 
        <AddUser onAdd={addUserHandler}/>
        <UserList users={users}/>
        </div>
   )
}

export default App;
