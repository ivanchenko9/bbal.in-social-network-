import Conversations from './Conversations'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect.js'
import { compose } from 'redux'

let mapStateToProps = (state) => {
  return { messagesPage: state.messagesPage }
}

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Conversations)
