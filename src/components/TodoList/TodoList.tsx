import { useState } from "react";
import {Form} from "../Form/Form";
import {TodoItem} from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css"



interface ITodoItem{
    id: string;
    text: string;
    completed: boolean;
    time: string;
}

export const TodoList=()=>{
    const [todos, setTodos] = useState<ITodoItem[]>([]);
    const [text, setText] = useState<string>("");

    const addNewTodo = () => {
        const date = new Date();
        const newTodo= {
            id: "id" + Math.random().toString(16).slice(2),
            text: text,
            completed: false,
            time:`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
        }
        const newTodos=[newTodo,...todos]
        setTodos(newTodos)
        setText('')
    };

    const onClickDelete = (id: string) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
        console.log(id);
    };

    const onClickComplete = (id: string) => {
        const newTodos= todos.map((item)=>{
            if (item.id===id){
                item.completed=!item.completed
            }
            return item
        })
        setTodos(newTodos)
        console.log(id);
    };


    return (
        <div className={styles.Todolist}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >

                <Form addNewTodo={addNewTodo}
                      text={text}
                      setText={setText} />
                {todos.map((item) => {
                    return (
                            <TodoItem
                                key={item.id}
                                text={item.text}
                                time={item.time}
                                onDelete={() => onClickDelete(item.id)}
                                onComplete={() => onClickComplete(item.id)}
                                completed={item.completed}
                            />
                    );
                })}
            <div className={styles.Opacity}>.</div>
            <div className={styles.TodoStatus}>
                <p>Active todos:{todos.length}</p>
                <p>Complete todos:{todos.reduce((prev, curr)=>{
                    if (curr.completed){
                        return prev + 1;
                    }
                    return prev;
                },0)}</p>
            </div>
        </div>
    );
};