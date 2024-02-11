import React from 'react'

const Display = ({maxVote,anecdote}) => {
  return (
    <><p>anecdote with most votes</p>
    <p>{anecdote}</p>
    has {maxVote} vote
    </>
  )
}

export default Display