import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'
const Course = ({courses}) => {

 return (<>
 {courses.map((course)=>{
  
  console.log('course name', course.name);
 return(<> <Header name ={course.name} key={course.id}/>
 <Content parts ={course.parts}/>
 <Total total={course.parts.reduce((total, part)=>total+part.exercises,0)}/>
 </>
  
 )

 
  } )
 }
 

  </>

   
  )
}

export default Course 