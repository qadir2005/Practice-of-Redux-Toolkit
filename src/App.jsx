import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multiply } from './redux/counter/counterslice'
import './App.css'
import Navbar from './navbar'


function App() {
  const [count, setCount] = useState(0)
  const value = useSelector((state)=> state.counter.value)
  const dispatch =useDispatch()
  return (
    <>
<Navbar />

    <button onClick={()=>dispatch(multiply())}>*</button>
     <button onClick={()=> dispatch(decrement())}>-</button>Now Counter value is {value} <button onClick={()=>dispatch(increment())}>+</button> 
         
         </>
  )
}

export default App
