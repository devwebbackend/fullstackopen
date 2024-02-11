import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
  return (<>
 
 <Header name ={course.name} key={course.id}/>
 <Content parts ={course.parts}/>
  </>

   
  )
}

export default Course