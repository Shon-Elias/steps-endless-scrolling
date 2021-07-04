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
    <form className='add-comment-box' onSubmit={submitComment} >
        <div  className='add-comment-inputs'>
        <div>
          <textarea
            className='inputs'
            name=" comment"
            placeholder="Comment"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="submit"
            type="submit"
            value="Post" />
        </div>
        </div>
    </form>
  )
}

export default AddComment;
