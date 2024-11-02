import React from 'react';
import {ACTIONS} from './App';

export default function AcButton({ dispatch}){


    return(
        <button className="span-two" onClick={()=>dispatch({ type: ACTIONS.DELETE_DIGIT, payload:{ } })}>AC</button>
    )
}