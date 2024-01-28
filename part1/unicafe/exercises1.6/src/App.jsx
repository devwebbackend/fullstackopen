
import { useState } from 'react'
import Button from './Button'

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const handleGood = ()=> {setGood(good + 1)
console.log(good)
}
const handleBad = ()=> setBad(bad + 1)
const handleNeutral = ()=> setNeutral(neutral + 1)
  return (
    <>
    <h1>give feedback</h1>
      <Button text ='good' onClick={handleGood}/>
      <Button text='neutral' onClick={handleNeutral}/>
      <Button text='bad' onClick={handleBad}/>
      <h2>statistics</h2>
      <p>good{good} </p>
      <p>neutral{neutral} </p>
      <p>bad{bad} </p>
    </>
  )
}

export default App
