import React from 'react'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../../protoRedux/profileReducer.js'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect.js'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profileData,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
