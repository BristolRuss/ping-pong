import { connect } from 'react-redux';
import Winner from './Winner';

const mapStateToProps = (state) => {
    return {
        winner: state.winner
    }
}

export default connect(mapStateToProps)(Winner);