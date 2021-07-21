import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import { Field, reduxForm } from 'redux-form'
import {
  required,
  maxLengthCreator,
} from '../../../Utils/Validators/validators.js'
import { Textarea } from '../../FormsControls/FormsControls.js'

const maxLengthCreator20 = maxLengthCreator(20)

const PostForm = (props) => {
  return (
    <div className={classes.posts__adding}>
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          name='postText'
          className={classes.posts__text}
          placeholder='Let`s share somothing with the World!'
          validate={[required, maxLengthCreator20]}
        />
        <button className={classes.post__add__button}>Add post</button>
      </form>
    </div>
  )
}

const PostReduxForm = reduxForm({ form: 'profilePostForm' })(PostForm)

function MyPosts(props) {
  let postsElements = props.postsData.map((post) => (
    <Post key={post.id} postTime={post.postTime} postText={post.postText} />
  ))

  const addPost = (formData) => {
    props.addPost(formData.postText)
  }

  return (
    <div className={classes.content__posts}>
      <div className={classes.posts__main__title}>Posts</div>
      <PostReduxForm onSubmit={addPost} />
      {postsElements}
    </div>
  )
}

export default MyPosts
