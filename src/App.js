import React, {useReducer} from "react";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const initialState = {count : 0};

const reducer = (state, action) => {
  const {type} = action;
  if(type === "increment"){
    console.log("incerment");
    return({...state, count : state.count + 1});
  }
  if(type === "decrement"){
    console.log("decrement");
    return({count :state.count-1});
  }
  if(type === "reset"){
    console.log("reset");
    return({...state, count: 0});
  }
  else {
    throw new Error("option not found");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <div className="App-header">
      <article>count : {state.count}</article>
      <button className="btn bg-primary" onClick={() => {dispatch({type: "increment"})}}>increment</button>
      <button className="btn bg-primary" onClick={() => {dispatch({type: "decrement"})}}>decrement</button>
      <button className="btn bg-primary" onClick={() => dispatch({type: "reset"})}>reset</button>
    </div>
  )
}


export default App;