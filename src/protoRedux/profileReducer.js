import { usersAPI, profileAPI } from "../api/API"

const ADD_POST = 'ADD-POST',
      SET_USER_PROFILE = 'SET-USER-PROFILE',
      SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    postsData : [
        {
          id: 1,
          postTime: '19:42',
          postText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum libero officiis culpa necessitatibus sed?',
        },
        {
          id: 2,
          postTime: '11:33',
          postText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis culpa necessitatibus sed?',
        },
        {
          id: 3,
          postTime: '10:22',
          postText:
            'Lorem ipsum dolor sit amet consectetur culpa adipisicing elit. Sint officiis culpa necessitatibus sed?',
        },
      ],
      profileData: null,
      newPostText:'',
      status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: 
            const newPost = {
                id:4,
                postTime: "19:55",
                postText: action.postText
              }
              return {
                ...state,
                newPostText:'',
                postsData : [...state.postsData, newPost]
              }
        case SET_USER_PROFILE:
          return{...state, profileData: action.profile}
        case SET_USER_STATUS:
          return{...state , status : action.status}
        default:
            return state
    }
}

export const addPost_actionCreter = (postText) => ({ type: ADD_POST, postText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setUsersStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data))
  })
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setUsersStatus(response.data))
  })
}

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if(response.data.resultCode === 0 ){
      dispatch(setUsersStatus(status))
    }
  })
}

export default profileReducer