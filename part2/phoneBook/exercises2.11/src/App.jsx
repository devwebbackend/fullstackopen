import { useState , useEffect} from 'react'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([
   
  ])
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

 


  return (
    <>
   
     
      <h2>Personnes</h2>
      <ul>
        {
          persons.map((person) =><li>{person.name}</li>)
        }
      </ul>
    </>
  )
}

export default App