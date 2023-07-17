import logo from './logo.svg';
import {useSelector, useDispatch} from "react-redux"
import { incNumber,decNumber } from './actions';
import './App.css';

function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()

  return(
    <>
    <p>{myState}</p>
    <button onClick={()=>dispatch(incNumber())}>+</button>
    <button onClick={()=>dispatch(decNumber())}>-</button>
    
    </>

  )
}

export default App;
