import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './myPosts/MyPostsContainer'

function Profile(props) {
  return (
    <div className={classes.profile__inner}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        // profile__name='Danyil'
        // profile__sername='Ivanchenko'
        // profile__country='Ukraine'
        // profile__city='Kharkiv'
        // profile__status='Bbal it`s life'
        // profile__other='Don`t worry, be happy =)'
      />
      <MyPostsContainer
      // store={props.store}
      />
    </div>
  )
}

export default Profile
