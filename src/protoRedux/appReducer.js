import {getAuthUserData} from './authReducer.js'

const SET_INITIALIZED = 'SET-INITIALIZED'

let initialState = {
     initialised: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED:
          return {...state, 
                  initialised : true
          } 
        default: 
            return state
    }
}

export const setInitialized = () => ({ type: SET_INITIALIZED})

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData())
  Promise.all([promise]).then( () => {
    dispatch(setInitialized())
  })
}

export default appReducer