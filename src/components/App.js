import React, { useReducer } from 'react'
import reducer, { initialState } from './../reducers'
import { addOne, applyNumber, change_operation, clearDisplay } from './../actions'
import './App.css'

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state: ', state);

  const handleClickOperation = (e) => {        
    dispatch (change_operation(e.target.value))  
  } 

  const handleClickNumber = (e) => {
    dispatch (applyNumber(Number(e.target.value)))
  }

  const handleClickCE = (e) => {
    dispatch (clearDisplay()) 
  }

  const handleClickMplus = (e) => {
    
  }

  const handleClickMR = (e) => {

  }

  const handleClickMC = (e) => {

  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick = { handleClickMplus } value={"M+"}/>
              <CalcButton onClick = { handleClickMR } value={"MR"}/>
              <CalcButton onClick = { handleClickMR } value={"MC"}/>
            </div>

            <div handleClickNumber className="row">
              <CalcButton value={1}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div onClick = { handleClickNumber } className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div onClick = { handleClickNumber } className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div onClick = { handleClickOperation } className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = { handleClickCE } value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
