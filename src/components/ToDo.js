import React, {useState} from 'react';
import { addTodo , deleteTodo , removeTodo} from '../actions/index';
import todo from "../images/todo.svg";
import { useSelector,useDispatch } from "react-redux";
import './todo.css';

import ReactTypingEffect from 'react-typing-effect';
const ToDo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();
    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                <h1 style={{color: "white" , marginBottom: "40px" , marginTop:"-50px", fontSize:"5rem"}}>
                
                <ReactTypingEffect speed={100} eraseSpeed={100} eraseDelay={2000} typingDelay={100}
                    text={["ToDoList With Redux"]}/>
                </h1>
                    <img src={todo} alt="todoLogo" />
                    <figcaption> Add Your List Here ✌</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="✍ Add Items..." value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
                    <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                </div>

                <div className="showItems">
                {
                    list.map((elem) => {
                        return(
                             <div className="eachItem" key={elem.id}>   
                        <h3>{elem.data}</h3>
                        <div className="todo-btn">
                        <i className="fa fa-trash add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                        </div>
                        </div>
                        )
                    })
                }
                    
                </div>

                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="remove All" onClick={()=> dispatch(removeTodo())}><span>Check List</span></button>
                </div>

            </div>
        </div>

        </>
    )
}

export default ToDo;
