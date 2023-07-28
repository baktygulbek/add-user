import React, { Fragment } from 'react'
import ReactDom from 'react-dom';
import Button from './Button'
import Card from './Card'
import classes from "./Error.module.css"

const Beckdrop = (props) => {
    return <div className={classes.beckdrop} onClick={props.onClick}/>
}

 
const ModalOverLay = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}
 const ErrorModal = (props) => {
    return (
       <Fragment>
      {ReactDom.createPortal(
       <Beckdrop onClick={ props.onClick}/>,
       document. getElementById('backdrop-root')
       )}

       {ReactDom.createPortal(
       <ModalOverLay
        title={props.title}
        message={props.message}
        onClick={props.onClick}/>,
        document.getElementById('modal-root')
       )}
       </Fragment>

    )
 }
export default ErrorModal;