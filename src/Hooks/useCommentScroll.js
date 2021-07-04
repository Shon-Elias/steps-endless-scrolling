
import axios from 'axios'
import { useEffect, useState } from 'react'

const useCommentScroll = (commentIndex, range) =>{

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [comments, setComments] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(false)

    // Passing default range with the index we want to start getting results
    axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${commentIndex}&_limit=${range}`)
    .then(res => {

      setComments(prevComments => {
          return [...prevComments, ...res.data]
      })


      setHasMore(res.data.length > 0)
      setLoading(false)

    })
    .catch(e => {
    })
  }, [commentIndex, range, hasMore])

  return { loading, error, comments, hasMore }
}



export default useCommentScroll;
