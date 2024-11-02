import React from 'react';
import {ACTIONS} from './App';

export default function DeleteButton({ dispatch}){


    return(
        <button onClick={()=>dispatch({ type: ACTIONS.CLEAR, payload:{ } })}>DEL</button>
    )
}