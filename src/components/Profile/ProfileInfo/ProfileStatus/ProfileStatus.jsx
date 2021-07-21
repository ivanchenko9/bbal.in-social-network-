import React from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }
  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  disableEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateUserStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
  }

  render() {
    return (
      <>
        <div className={classes.status__wrapper}>
          {!this.state.editMode && (
            <div
              onDoubleClick={this.activateEditMode}
              className={classes.profile__status}>
              <span>Status: </span>{' '}
              {!this.props.status ? '' : this.props.status}
            </div>
          )}
          {this.state.editMode && (
            <div className={classes.status__input}>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.disableEditMode}
                value={this.state.status}
              />
            </div>
          )}
        </div>
      </>
    )
  }
}

export default ProfileStatus
