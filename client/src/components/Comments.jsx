import { useState } from 'react'
import axios from 'axios'

const Comment = ({ getRecipeList, recipe }) => {
  const [newComment, setNewComment] = useState({
    user: '',
    comment: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await axios.post(
      `http://localhost:3001/api/recipes/${recipe._id}/comment`,
      newComment
    )

    getRecipeList()
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewComment((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Comments</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment.user}
          onChange={handleChange}
          name={'user'}
          placeholder={'username'}
        />
        <input
          type="text"
          value={newComment.comment}
          onChange={handleChange}
          name={'comment'}
          placeholder={'Post your comment here'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Comment
