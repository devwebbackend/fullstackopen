import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {

 return (<>
 
 <Header name ={course.name} key={course.id}/>
 <Content parts ={course.parts}/>
 <h2>total of {
  course.parts.reduce((total, part)=> total+part.exercises, 0)

 
  }
 
  exercises</h2>
  </>

   
  )
}

export default Course 