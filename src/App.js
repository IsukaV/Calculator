import React, {useReducer} from 'react';
import './App.css';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
  
}

//reducer function is triggerd
function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currentOperand ==="0") return state
      if(payload.digit === "." && state.currentOperand.include(".")) return state
      return{
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
  }

}

function App() {

  const [{currentOperand, previousOperand, operator},dispatch] = useReducer(reducer, {})
  //Here the 3 states are stored in the and sent to the reducer function when the the user dispatch along with the actions.
  return (
    <div className="calculator-grid">
      <div className="output">
      <div className="previous-operand">{previousOperand} {operator}</div>
      <div className="current-operand">{currentOperand}</div>
      </div>
      {/* <DigitButton digit="÷" dispatch={dispatch}/> */}
      <button className="span-two">AC</button>
      
     
      
      
      
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className="span-two">=</button>

    </div>
  );
}

export default App;
