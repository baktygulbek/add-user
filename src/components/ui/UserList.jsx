import React from "react";
import Card from "./Card";
import classes from './UserList.module.css'

const UserList = (props) =>{
    return(
        <Card className={classes.users}>
        <ul>
            {props.users.map(user => {
               return <li key={user.id}>{user.username}({user.age}years)</li>
            })}
        </ul>
        </Card>
    )
}


export default UserList