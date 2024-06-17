import { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cards, setcards] = useState([])

  const fetchdata=async ()=>{
    let a = await fetch ("https://jsonplaceholder.typicode.com/todos");
    let data = await a.json()
    setcards(data)
    console.log(data);
  }

  useEffect(() => {
    fetchdata()
    alert("card is added")
  }, [])
  

  return (
    <>
    <Navbar/>
    <div className="container">
      {cards.map((card)=>{
        return <div key={card.id} className="card">
          <h1>{card.title}</h1>
          <p>{card.completed}</p>
          <span>User id : {card.userId}</span>
        </div>

      })}
    </div>
      
    </>
  )
}

export default App
