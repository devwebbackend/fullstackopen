import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
 let total = 0
 return (<>
 
 <Header name ={course.name} key={course.id}/>
 <Content parts ={course.parts}/>
 <h2>total of {
  course.parts.forEach((part)=> total+=part.exercises)

 
  }
  { total}
  exercises</h2>
  </>

   
  )
}

export default Course 