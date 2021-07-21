import { sendMessages_actionCreter } from '../../../protoRedux/messagesReducer.js'
import Messages from './Messages.jsx'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect.js'
import { compose } from 'redux'

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: (messageText) => {
      dispatch(sendMessages_actionCreter(messageText))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages)
