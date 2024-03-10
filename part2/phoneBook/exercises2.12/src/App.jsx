import { useState , useEffect} from 'react'
import axios from 'axios'
const App = () => {
  const [countries, setCountries] = useState([
  
  ])
  
  const [searshCountries, setSearshCountries] = useState('')

  const [showSearsh, setShowSearsh]= useState(true)
  const regex = new RegExp(searshCountries, 'gi');

  const searchCountry = showSearsh ? countries : countries.filter((country)=>regex.test(country.name['common']))
  console.log('searchCountry',searchCountry);
 
  const handleSearsh = (event)=> {
    console.log('searsh', event.target.value) 
  setShowSearsh(false)
  setSearshCountries(event.target.value)

} 
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

 


  return (
    <>
   <p>Search :</p>
   <input type="text"  onChange={handleSearsh}/> 
     
      <h2>find Countries</h2>

      <ul>
      {(searchCountry.length > 10)?
      <p>too many matches, specify another filtre </p>
     
     : searchCountry.map((country) =><li>{country.name['common']}</li>)
      }
      </ul>
      {
        (searchCountry.length === 1)?
      
        searchCountry.map((country) =>{return(<>
        <h1>{country.name['common']}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h2>Languages</h2>
      <ul>{Object.values(country.languages).map((language)=>{return(<li>{language}</li> 
   )})  }</ul>
        <img src={country.flags.png}/></>)
        }
        )
       : <p></p>
      }
    </>
  )
}

export default App