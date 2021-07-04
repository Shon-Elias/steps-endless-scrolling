import { useState } from "react"
import axios from 'axios';
import { nanoid } from 'nanoid';

const AddComment = () => {

  const [newComment, setNewComment] = useState('')

  const submitComment = (e) => {
    e.preventDefault()

    const comment = {
      id: 1,
      postId: nanoid(),
      email: 'example@example.com',
      name: 'username',
      body: newComment
    }

    postComment(comment);
  }

  const postComment = comment => {
    axios.post('https://jsonplaceholder.typicode.com/posts', comment
    )
    .then(res => {
      console.log("post", res);

      setNewComment('')
    })
    .catch(e => {
      console.log('post req err', e)
    })
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
