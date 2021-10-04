import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from '../actions/index';
const Form = () => {

    const [data, setData] = useState('');
    const mylist = useSelector((event) => event.todoReducer)
    const dispatch = useDispatch();
    console.log(mylist)

    const handleUpdate = (index) => {
        const updateData = prompt("enter list", mylist[index]);
        dispatch(updateTodo(updateData, index))


    }

    return (

        <div>
            <div>
                <form>
                    <label><b>INPUT FIELD: </b></label>
                    <input type="text"
                        placeholder="Enter Input"
                        value={data}
                        onChange={(e) => { setData(e.target.value) }}
                    />
                    <button onClick={(e) => { e.preventDefault(); dispatch(addTodo(data)); setData('') }} >Submit</button>
                </form>
            </div>
            <div>
                {
                    mylist && mylist.map((data, index) => {
                        return (<div key={index}>
                            <h1>{data}</h1>
                            <button onClick={() => dispatch(deleteTodo(data), setData(''))}>DELETE</button>&nbsp;
                            <button onClick={() => handleUpdate(index)}>UPDATE</button>&nbsp;
                        </div>)
                    })

                }

            </div>
        </div>


    )
}

export default Form
