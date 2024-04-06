import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
let myObj = {
  name:'Bidu',
  age: 22
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-5 rounded-xl'>Tailwind Test</h1>
    <Card channel='helloworld' someObj={myObj}/>
    <Card />
    </>
  )
}

export default App
