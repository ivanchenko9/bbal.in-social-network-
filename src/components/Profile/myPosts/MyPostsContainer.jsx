import { addPost_actionCreter } from '../../../protoRedux/profileReducer.js'
import MyPosts from './MyPosts.jsx'

import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPost_actionCreter(postText))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
