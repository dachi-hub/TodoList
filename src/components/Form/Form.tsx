import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {ChangeEvent} from "react";
import styles from "./Form.module.css"


interface IProps {
    addNewTodo: () => void;
    text: string;
    setText:(value:string) => void;
}

export const Form = ({ addNewTodo, text, setText}: IProps) => {
    const onChange=(event:ChangeEvent<HTMLInputElement>)=>{setText(event.target.value)}
    return (
        <div className={styles.Form}>
            <Input value={text} onChange={onChange} />
            <Button text="Add todo" onClick={addNewTodo} />
        </div>
    );
};