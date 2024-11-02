import React, {useReducer} from 'react';
import './App.css';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import AcButton from './AcButton';
import DeleteButton from './DeleteButton';
import EvaluateButton from './EvaluateButton';

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
      if(state.currentOperand ==="∞") return state
      if(payload.digit === "." && state.currentOperand && state.currentOperand.includes(".")) return state
      return{
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
    case ACTIONS.CHOOSE_OPERATION:
      if(!state.currentOperand && state.previousOperand){
        return{
          ...state,
          operator :  `${payload.operation}`
        }
      }
      if(!state.currentOperand || state.currentOperand ==="") return state
      if(!state.previousOperand || state.previousOperand ===""){
        return{
          ...state,
          previousOperand :  `${state.currentOperand}`,
          currentOperand : "",
          operator : `${payload.operation}`
        }
      }
      if(state.previousOperand && state.operator){
          let temp_result = 0
          if(state.previousOperand) temp_result=Number(state.previousOperand) 
          if(state.operator === "÷") temp_result /= Number(state.currentOperand)
          if(state.operator === "*") temp_result *= Number(state.currentOperand)
          if(state.operator === "-") temp_result -= Number(state.currentOperand)
          if(state.operator === "+") temp_result += Number(state.currentOperand)
          let str_result = `${temp_result}`
          console.log("Hi");
          if(state.previousOperand==="∞" || state.currentOperand==="0"){
            console.log("yes")
            str_result="∞"
          }
          return{
            ...state,
            previousOperand: `${str_result}`,
            operator: `${payload.operation}`,
            currentOperand: ""
          }
      } 
      return{
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
    
    case ACTIONS.CLEAR:
      return{
        ...state,
          currentOperand: "",
          previousOperand: "",
          operator: ""
        }

    case ACTIONS.DELETE_DIGIT:
      if(state.currentOperand){
        return{
          ...state,
          currentOperand: `${state.currentOperand.slice(0,-1)}`,
        }
      }
      if(!state.currentOperand && state.previousOperand){
        return{
          ...state,
          currentOperand: state.previousOperand,
          previousOperand: "",
          operator: ""
        }
      }
      return state

      case ACTIONS.EVALUATE:
        let temp_result = 0
        if(state.previousOperand && state.currentOperand) {
          if(state.previousOperand) temp_result=Number(state.previousOperand) 
          if(state.operator === "÷") temp_result /= Number(state.currentOperand)
          if(state.operator === "*") temp_result *= Number(state.currentOperand)
          if(state.operator === "-") temp_result -= Number(state.currentOperand)
          if(state.operator === "+") temp_result += Number(state.currentOperand)
          let str_result = `${temp_result}`
          if(state.currentOperand === "0" && state.operator==="÷"){
            str_result = "∞"
          }
          if(state.previousOperand === "∞") str_result = "∞"
          return{
            ...state,
            currentOperand : `${str_result}`,
            previousOperand: "",
            operator: ""
          }
        }
        if(state.previousOperand){
          return{
            ...state,
              currentOperand : state.previousOperand,
              previousOperand: "",
              operator: ""
          }
        }
        return state
      
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
      <AcButton  dispatch={dispatch}/>
      <DeleteButton  dispatch={dispatch}/>
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
      <EvaluateButton dispatch={dispatch}/>

    </div>
  );
}

export default App;
