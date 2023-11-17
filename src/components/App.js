import { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import Title from "./Title.js";

function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpVotes] = useState(video.upvotes)
  const [downvotes, setdownvotes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)

  function updateUpvotes() {
    setUpVotes(upvotes + 1)
  }
  function updateDownVotes() {
    setdownvotes(downvotes + 1)
  }

  function toggleComments() {
    setShowComments(!showComments)
  }
 
  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Title title={video.title} views={video.views} createdAt={video.createdAt} upvotes={upvotes} downvotes={downvotes} addUpvotes={updateUpvotes} addDownvotes={updateDownVotes} toggleComments={toggleComments}/>
      <hr/>
      {
      
      showComments ? <Comments comments={video.comments}/> : null
      }
    </div>

  );
}

export default App;
