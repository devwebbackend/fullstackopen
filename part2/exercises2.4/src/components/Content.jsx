import React from 'react'
import Part from './Part'
const Content = ({parts}) => {
  console.log(parts[0].name)
  return (
    <> <ul>

{parts.map(part => {return(<Part name={part.name} key = {part.id}/>)})}

    </ul>
  
    </>
  )
}

export default Content