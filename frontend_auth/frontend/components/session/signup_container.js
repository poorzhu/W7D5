import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// ??? no state required. check local vs global state

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);