import {Button} from "../Button/Button";
import {useState} from "react";
import styles from "./TodoItem.module.css"


interface IProps{
    text: string;
    time: string;
    completed: boolean;
    onDelete: () => void
    onComplete: () => void
}

export const TodoItem=({text, completed, onDelete, onComplete,time}:IProps)=>{
    const [showTime, setShowTime]=useState(false)

    const toggleShowTime=()=>{
        setShowTime(!showTime)
    }
    return (
        <div className={styles.TodoItem}>
            <Button text="&#10003;" onClick={onComplete} />
            <p onClick={toggleShowTime} style={{textDecoration: completed?"line-through":"none", padding: "0 5px"}}>
                {text}

            </p>
            {showTime ? <p style={{display:"flex", flexDirection:"column"}}>{time}</p>:null}
            <Button text="X" onClick={onDelete} />
        </div>
    )
}