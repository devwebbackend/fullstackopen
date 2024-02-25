import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',phone: '4578865654' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
const handleNewName = (event)=> {
console.log('newName', event.target.value);

  setNewName(event.target.value)}
  const handleNewPhone = (event)=> {
    console.log('newPhone', event.target.value);
    
      setNewPhone(event.target.value)}


const handleSubmit = (event)=> {
  event.preventDefault()
  console.log(newName);

const personeShowAll = persons.filter(person=>person.name !== newName)
const personeShowAllPhone = persons.filter(person=>person.phone !== newPhone)
console.log('personneshowall', personeShowAll)


if(JSON.stringify(personeShowAll) !== JSON.stringify(persons)){
 
    alert(`${newName} exist dans la list`)
  
 
}else{
if(JSON.stringify(personeShowAllPhone) !== JSON.stringify(persons)){
 
  alert(`${newPhone} exist dans la list`)
}else{
setPersons(persons.concat({name:newName, phone:newPhone})) 
}
}
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form   onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNewName} name={newName}/>
          <div>number: <input onChange={handleNewPhone}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>{return(<p>{person.name}{person.phone}</p>)})}
    </div>
  )
}

export default App