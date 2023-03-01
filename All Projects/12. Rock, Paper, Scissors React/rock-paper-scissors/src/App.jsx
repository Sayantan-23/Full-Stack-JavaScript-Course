import { useState } from 'react'
import './App.css'
import rockPaperScissors from './assets/rock-paper-scissors.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden p-4 font-["Poppins"] bg-gradient-radial from-[#70a9a1] to-[#193038] h-[100vh]'>
      <h1 className='text-white mx-auto w-max text-3xl max-w-5xl sm:text-4xl'>Rock, Paper, Scissors</h1>
      <img src={ rockPaperScissors } alt="" className='w-16 m-auto mx-auto mt-6' />
      <div className='flex justify-between text-white max-w-5xl mx-auto mt-10 items-center flex-wrap sm:text-xl'>
        <p>My Score - 0</p>
        <p>Computer Score - 0</p>
      </div>
    </div>
  )
}

export default App
