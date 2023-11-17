import React, { useState } from 'react'

function Comment({comment}) {
    const [upvotes, setUpVotes] = useState(comment.upvotes);
    const [downvotes, setDownVotes] = useState(comment.downvotes)
    function handleCommentUpvote() {
        setUpVotes(upvotes + 1)
      }
    function handleCommentDownVote() {
        setDownVotes(downvotes + 1)
    }

  return (
    <div>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        <button onClick={handleCommentUpvote}>upvotes:{upvotes}</button>
        <button onClick={handleCommentDownVote}>downvote:{downvotes}</button>
    </div>
  )
}

export default Comment