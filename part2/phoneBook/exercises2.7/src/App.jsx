import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)
const handleNewName = (event)=> {
console.log('newName', event.target.value);

  setNewName(event.target.value)}
const handleSubmit = (event)=> {
  event.preventDefault()
  console.log(newName);

const personeShowAll = persons.filter(person=>person.name !== newName)

console.log('personneshowall', personeShowAll)


if(JSON.stringify(personeShowAll) === JSON.stringify(persons)){
   setPersons(persons.concat({name:newName})) 
       

  }
  else {
    alert(`${newName} exist dans la list`)
  }

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