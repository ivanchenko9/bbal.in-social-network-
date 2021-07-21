import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import ProfileContainer from './components/Profile/ProfileContainer.jsx'
import UsersContainer from './components/Users/UsersContainer.jsx'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer.jsx'
import Login from './components/Login/Login.jsx'
import React from 'react'
import { initializeApp } from './protoRedux/appReducer.js'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from './components/Preloader/Preloader.jsx'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialised) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className='container app__wrapper'>
          <HeaderContainer />
          <Navigation />
          <div className='app__content'>
            <Route
              path='/profile/:userId?'
              render={() => (
                <ProfileContainer
                // store={props.store}
                />
              )}
            />
            <Route
              path='/dialogs'
              render={() => (
                <Dialogs
                // store={props.store}
                />
              )}
            />
            <Route
              path='/users'
              render={() => (
                <UsersContainer
                // store={props.store}
                />
              )}
            />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialised: state.app.initialised,
})
//export default withRouter(connect(null, { getAuthUserData })(App))
export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)
