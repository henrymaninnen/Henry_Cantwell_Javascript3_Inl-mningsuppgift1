import { useState } from "react"
import PostLiked from './PostLiked'

function ReactPost({fa}) {
    let [liked, setLiked] = useState(true);
    
    return (
    <>
    <h2>{fa.question}</h2>
    <p>{fa.answer}</p>
    {liked ? <button 
    onClick={() => {
        setLiked(false);
    }}
    >
    gilla
    </button> : <PostLiked/>}
      
   </>
     )
  }
  
   export default ReactPost