import React from 'react'
import Part from './Part'
const Content =() => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <><Part part={parts[0].name} exercises ={parts[0].exercises}></Part> 
    <Part part={parts[1].name} exercises ={parts[1].exercises}></Part> 
    <Part part={parts[2].name} exercises ={parts[2].exercises}></Part> 
  </>
  )
}

export default Content