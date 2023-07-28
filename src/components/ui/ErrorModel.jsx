import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from "./Error.module.css"

const ErrorModel = (props) => {
  return (
    <div>
        <div className={classes.backdrop} onClick={props.onClick}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={classes.content}>
                <p>{props.message}</p>
            </main>
            <footer className={classes.actions}>
                <Button onClick={props.onClick}>ok</Button>
            </footer>
        </Card>

    </div>
  )
}

export default ErrorModel