
import { useState } from 'react'
import Button from './Button'

  // ne pas définir un composant dans un autre composant

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const handleGood = ()=> {setGood(good + 1)
console.log(good)
}
const Statistics = ({all,average,positive}) => {

 if(good !== 0 || bad !== 0 || neutral !== 0)  
  return ( <><p>good{good} </p>
  <p>neutral{neutral} </p>
  <p>bad{bad} </p>
  <p>all {all}</p>
  <p>{average}</p>
  <p>{positive}</p></>)
else return(<><p>No feedback</p></>)
 
}

const handleBad = ()=> setBad(bad + 1)
const handleNeutral = ()=> setNeutral(neutral + 1)
const average = ()=>{
  let score = good - bad  ;
 
                      return'average'+score
                    
                     }

const positive = ()=>{
 let total = good + bad + neutral ;
  if(good === 0)return 'positive'+ 0 
                      else if(total === 0)
                      return 'positive'+0
                    else
                    { return'positive'+(good/total)*100} 
                   // console.log(total)
                    return 'positive' +total
                    }
  return (
    <>
    <h1>give feedback</h1>
      <Button text ='good' onClick={handleGood}/>
      <Button text='neutral' onClick={handleNeutral}/>
      <Button text='bad' onClick={handleBad}/>
      <h2>statistics</h2>
     {/*  <p>good{good} </p>
      <p>neutral{neutral} </p>
      <p>bad{bad} </p>
    
      <p>No feedback given</p> */}
      <Statistics all={good+bad+neutral}  average={average()} positive={positive()}/>
      
    </>
  )
}

export default App
