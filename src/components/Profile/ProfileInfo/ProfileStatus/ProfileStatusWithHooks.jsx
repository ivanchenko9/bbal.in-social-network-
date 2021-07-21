import React from 'react'
import { useState } from 'react'
import classes from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const disableEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <>
      <div className={classes.status__wrapper}>
        {!editMode && (
          <div
            onDoubleClick={activateEditMode}
            className={classes.profile__status}>
            <span>Status: </span> {!props.status ? '' : props.status}
          </div>
        )}
        {editMode && (
          <div className={classes.status__input}>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={disableEditMode}
              value={status}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default ProfileStatusWithHooks
