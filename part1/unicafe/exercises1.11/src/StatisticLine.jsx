import React from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
<table>
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{text}</th>
      <td>{value}</td> 
    </tr>
  </tbody>
</table>
   </>
  )
}

export default StatisticLine