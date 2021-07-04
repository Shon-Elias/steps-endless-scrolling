import { useState } from "react"


const AddComment = () => {

  const [newComment, setNewComment] = useState('')

  const submitComment = (e) => {
    e.preventDefault()

  }




  return (
    <form  onSubmit={submitComment} >
        <div  >
        <div>
          <textarea
            placeholder=" comment"
            value={newComment}
            onChange={e=>setNewComment(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Post" />
        </div>
        </div>
    </form>
  )
}

export default AddComment;
