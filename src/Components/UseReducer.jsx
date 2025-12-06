import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

// const ReducerAction = (val,action)=>{

// }

const UseReducerHook = () => {
    const [val,dispatch] = useReducer(ReducerAction,0)
    return (
        <div>
            <h1>UseReducer Hook</h1>
            <button onClick={()=>{dispatch({type:"ADD",payload:10})}}>Add</button>
            {val}
            <button onClick={()=>{dispatch({type:"SUB",payload:5})}}>Sub</button>
        </div>
    );
};

export default UseReducerHook;