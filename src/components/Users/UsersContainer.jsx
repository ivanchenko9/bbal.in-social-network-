import React from 'react'
import { connect } from 'react-redux'
import {
  acceptFollow,
  acceptUnfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  requestUsers,
  follow,
  unfollow,
} from '../../protoRedux/usersReducer.js'
import Users from './Users.jsx'
import Preloader from '../Preloader/Preloader.jsx'
import { compose } from 'redux'
import {
  getUsers,
  getPageSiza,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../protoRedux/usersSelectors.js'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          usersData={this.props.usersData}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}

// let mapStateToProps = (state) => {
//   return {
//     usersData: state.usersPage.usersData,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }
let mapStateToProps = (state) => {
  return {
    usersData: getUsers(state),
    pageSize: getPageSiza(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    acceptFollow,
    acceptUnfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers,
    follow,
    unfollow,
  })
)(UsersContainer)

// props.setUsers([
//   {
//     id: 1,
//     user__followed: true,
//     user__name: 'Antony',
//     user__sername: 'Edwards',
//     user__location: {
//       country: 'USA',
//       city: 'Georgia',
//     },
//     user__status:
//       'Lorem ipsum dolor sit  adipisicing elit. Sint rerum libero officiis culpa necessitatibus sed?',
//     user__photo:
//       'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4594268.png',
//   },
//   {
//     id: 2,
//     user__followed: false,
//     user__name: 'James',
//     user__sername: 'Wiseman',
//     user__location: {
//       country: 'USA',
//       city: 'Memphis',
//     },
//     user__status:
//       'Lorem ipsum dolor sit amet  libero officiis culpa necessitatibus sed?',
//     user__photo:
//       'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432808.png',
//   },
//   {
//     id: 3,
//     user__followed: true,
//     user__name: 'Lamelo',
//     user__sername: 'Ball',
//     user__location: {
//       country: 'USA',
//       city: 'Illawarra',
//     },
//     user__status:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum libero off?',
//     user__photo:
//       'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432816.png',
//   },
// ])
