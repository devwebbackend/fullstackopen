
import { useState } from 'react'
import  Button  from './Button'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length - 1).fill(0))
/*  if(vote.empty){
  vote = Array(anecdotes.length - 1).fill(0)
 } */
  const copy = [...vote]
// incrémenter la valeur en position 2 de un
//copy[2] += 1  
 
  let randomSelect = Math.floor(Math.random() * (anecdotes.length))

 const handleNextAnecdots = ()=>{
   console.log(randomSelect)
     setSelected(randomSelect)
  }
  const handleVote = ()=>{
    copy[selected]+=1
    
setVote(copy)
console.table(copy)
console.log(copy[selected])

  }

  return (
    <>
      <p>{anecdotes[selected]}</p>

<p>has {vote[selected]} votes</p>
<Button text="next anecdots"  next={handleNextAnecdots}/>
<Button text="vote"  next={handleVote}/>

    </>
  )
}

export default App
