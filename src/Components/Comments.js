import { useState, useRef, useCallback } from "react";
import useCommentScroll from '../Hooks/useCommentScroll'

const Comments = () => {
  const [commentIndex, setCommentIndex] = useState(() =>{
    return 0;
   });
   const range = '20';

  const {
    comments,
    hasMore,
    loading,
    error
  } = useCommentScroll(commentIndex, range)

  //  create ref
  const observer = useRef()
  const lastCommentElementRef = useCallback(node => {
    // if loading, don't trigger scorlling
    if (loading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      // Check the value of the isIntersecting property to see if the entry represents an element that currently intersects with the root.
      // Check hasMore true to know if we fetch all the comments
      if (entries[0].isIntersecting && hasMore) {
        setCommentIndex(prevCommentIndex => {
          return (prevCommentIndex + 20)
        })

      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])




  return (
    <div className='comments-box'>Comments
      {
        comments.map((comment, i) => {

        console.log('comment #', i)
          if (comments.length === i + 1) {
            return (
              <div className='last-comment' ref={lastCommentElementRef} key={comment.id}>
                {comment.id}
                <div className='comment-name'>{comment.name}</div>
                <div className='comment-email'>{comment.email}</div>
                <div className='comment-id'>{comment.body}</div>
              </div>
            )
          } else {
            return (
              <div className='comment' key={comment.id}>
                {comment.id}
                <div className='comment-name'>{comment.name}</div>
                <div className='comment-email'>{comment.email}</div>
                <div className='comment-id'>{comment.body}</div>
            </div>
            )
          }

        })
      }

      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
      <div>{!hasMore &&  'No more comments' }</div>
    </div>
  )
}
export default Comments;
