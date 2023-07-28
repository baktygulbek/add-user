import React, {useState} from 'react'
import Card from './ui/Card'
import Button from './ui/Button'
import classes from './AddUser.module.css'
import ErrorModel from './ui/ErrorModel'


const AddUser = (props) => {

const [username,setUsername] = useState('')
const [age,setAge] = useState('')
const [error,setError] = useState(null)


const usernameChangeHandler = (e) =>{
    setUsername(e.target.value)
}

const  ageChangeHandler = (e) => {
 setAge(e.target.value)
}

const submitHandler = (e) => {
    e.preventDefault()
    if(username.trim().length === 0 || age === 0) {
      setError({
        title:'pustoe znacenie',
        message:'vy ne mogete otpravit formu pustym'
      })
     return
    }
      if (age < 5){
        setError({
          title:'vy ne podxodite vozrast',
          message:'ty eche malenki'
        })
      return
  }
    props.onAdd(username,age)
    setUsername('')
    setAge('')
}

const closeModalHandler = () => {
  setError(null)
}
//true & errormodal
  return (
    <div>
    

      {error && <ErrorModel title={error.title} message={error.message} onClick={closeModalHandler} />}
      <Card className={classes.input}> 
        <form onSubmit={submitHandler}>
            <label htmlFor="name">User name</label>
            <input value={username} id='name' type="text" onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age</label>
            <input value={age} id='age'type="number" onChange={ageChangeHandler} />
            <Button type='submit'>AddUser</Button>
        </form>
    </Card>
    </div>
  
  )
  }

export default AddUser