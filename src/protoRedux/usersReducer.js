import { usersAPI } from '../api/API.js'

const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET-USERS',
      SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
      SET_USERS_COUNT ='SET-USERS-COUNT',
      TOGGLE_IS_FETCHING ='TOGGLE-IS-FETCHING',
      TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
     usersData : [],
     pageSize: 5,
     totalUsersCount: 0,
     currentPage: 1,
     isFetching: false,
     followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
          return {...state, 
            usersData:state.usersData.map(user => {
              if(user.id === action.userID){
                //return{...user, user__followed:true}
                return{...user, followed:true}
              } else return user
            })
          } 
        case UNFOLLOW:
          return {...state, 
            usersData:state.usersData.map(user => {
              if(user.id === action.userID){
                //return{...user, user__followed:false}
                return{...user, followed:false}
              } else return user
            })
          }
        case SET_USERS:
          return {...state, usersData: action.users}
        case SET_CURRENT_PAGE:
          return{...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
          return{...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
          return{...state, isFetching:action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
          return{...state, 
            followingInProgress: action.isFetching?
            [...state.followingInProgress, action.userId] 
            :state.followingInProgress.filter(id => id !== action.userId)}
        default: 
            return state
    }
}

export const acceptFollow = (userID) => ({ type: FOLLOW, userID })

export const acceptUnfollow = (userID) => ({ type: UNFOLLOW, userID})

export const setUsers = (users) => ({ type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})

export const setUsersCount = (totalCount) => ({ type: SET_USERS_COUNT, totalCount})

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})

export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
       dispatch(toggleIsFetching(true))
       dispatch(setCurrentPage(page))
      usersAPI
        .getUsers(page, pageSize)
        .then((data) => {
          dispatch(toggleIsFetching(false))
          dispatch(setUsers(data.items))
          dispatch(setUsersCount(data.totalCount))
        })
      }
}

export const follow = (userId) => {
  return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.followUsers(userId).then((data) => {
          if (data.resultCode === 0) {
            dispatch(acceptFollow(userId))
          }
          dispatch(toggleIsFollowingProgress(false, userId))
        })
      }
}

export const unfollow = (userId) => {
  return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollowUsers(userId).then((data) => {
          if (data.resultCode === 0) {
            dispatch(acceptUnfollow(userId))
          }
          dispatch(toggleIsFollowingProgress(false, userId))
        })
        
      }
}

export default usersReducer