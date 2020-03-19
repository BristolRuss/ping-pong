import { connect } from 'react-redux';
import Deuce from './Deuce';

const mapStateToProps = (state) => {
    return {
        deuce: state.deuce
    }
}

export default connect(mapStateToProps)(Deuce);