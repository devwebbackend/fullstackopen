import React from 'react'

const Part = ({name, id}) => {
  return (
    <><li key={id}> {name}</li></>
  )
}

export default Part