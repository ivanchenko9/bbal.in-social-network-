import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../protoRedux/authReducer.js'

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, { logout })(HeaderContainer)
