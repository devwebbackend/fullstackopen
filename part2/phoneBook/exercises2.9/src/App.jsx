import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newSearch, setNewSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)

  const showSearchName = showAll ? persons : persons.filter((persone)=>{persone.name == 'Arto Hellas'})


const handleNewName = (event)=> {
console.log('newName', event.target.value);

  setNewName(event.target.value)}
  const handleNewPhone = (event)=> {
   
    console.log('newPhone', event.target.value);
    
      setNewPhone(event.target.value)}
      const searchName = event.target.value 
      const handleNewSearch = (event)=> {
        console.log('newSearch', event.target.value);
        
          setNewSearch(event.target.value)
          setShowAll(false)
          
      
            console.log('show all search', showSearchName,'showAll', showAll)
        
        }

const handleSubmit = (event)=> {
  event.preventDefault()
  console.log(newName);

const personeShowAll = persons.filter(person=>person.name !== newName)
const personeShowAllPhone = persons.filter(person=>person.number !== newPhone)
console.log('personneshowall', personeShowAll)


if(JSON.stringify(personeShowAll) !== JSON.stringify(persons)){
 
    alert(`${newName} exist dans la list`)
  
 
}else{
if(JSON.stringify(personeShowAllPhone) !== JSON.stringify(persons)){
 
  alert(`${newPhone} exist dans la list`)
}else{
setPersons(persons.concat({name:newName, number:newPhone})) 
}
}
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form   onSubmit={handleSubmit}>
        <div>
        search: <input onChange={handleNewSearch} name={newName}/>
          name: <input onChange={handleNewName} name={newName}/>
          <div>number: <input onChange={handleNewPhone}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {
       
       showSearchName.map((person)=>{return(<p>{person.name}{person.number}</p>)})
      
      }
    </div>
  )
}

export default App