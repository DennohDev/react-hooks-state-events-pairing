import React from 'react'
import Comment from './Comment'

function Comments({comments}) {

  return (
    <div>
        <h2>{comments.length} Comments</h2>
        {
            comments && comments.map(comment=><Comment key={comment.id}comment={comment}/>)
        }
    </div>
  )
}

export default Comments