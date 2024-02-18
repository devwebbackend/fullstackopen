import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
const handleNewName = (event)=> {
console.log('newName', event.target.value);

  setNewName(event.target.value)}
const handleSubmit = (event)=> {
  event.preventDefault()
  console.log(newName);
  

   setPersons(persons.concat({name:newName})) 
 

}
  return (
    <div>
      <h2>Phonebook</h2>
      <form   onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNewName} name={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>{return(<p>{person.name}</p>)})}
    </div>
  )
}

export default App