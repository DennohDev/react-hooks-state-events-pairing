import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'

function Title({title, views, createdAt, upvotes, downvotes,addUpvotes, addDownvotes, toggleComments}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{views} views | Uploaded {createdAt}</p>
        <div>
        <button onClick={addUpvotes}>{upvotes} <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffd43b",}} /></button>
        <button onClick={addDownvotes}>{downvotes} <FontAwesomeIcon icon={faThumbsDown} style={{color: "#ffd43b",}} /></button>
        </div>
        <button onClick={toggleComments}>Hide Comments</button>
    </div>
  )
}

export default Title