import React from 'react'
import classes from './Users.module.css'
import defaultAva from '../../images/defaultAvatar/avatar.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let usersElements = props.usersData.map((user) => {
    return (
      <div key={user.id} className={classes.user__item}>
        <div className={classes.user__left__side}>
          <div className={classes.user__photo}>
            <img
              src={user.photos.small != null ? user.photos.small : defaultAva}
              alt='user__photo not found!'
            />
          </div>
          {user.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.unfollow(user.id)
              }}
              className={classes.user__button}>
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.follow(user.id)
              }}
              className={classes.user__button}>
              Follow
            </button>
          )}
        </div>
        <NavLink to={`/profile/${user.id}`}>
          <div className={classes.user__right__side}>
            <div className={classes.user__name}>
              <span>Name: </span>
              {user.name}
            </div>
            <div className={classes.user__sername}>
              <span>Sername: </span>
            </div>
            <div className={classes.user__location}>
              <span>Location: </span>
            </div>
            <div className={classes.user__status}>
              <span>Status: </span>
              {user.status}
            </div>
          </div>
        </NavLink>
      </div>
    )
  })

  return (
    <div className={classes.users__wrapper}>
      <div className={classes.users__main__title}>Users</div>
      <div className={classes.pages__of__users}>
        {pages.map((page) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(page)
              }}
              key={page}
              className={
                props.currentPage === page
                  ? classes.selected__page
                  : classes.nonselected__page
              }>
              {page}
            </span>
          )
        })}
      </div>

      <div className={classes.users__inner}>{usersElements}</div>
    </div>
  )
}

export default Users
