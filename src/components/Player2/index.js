import { connect } from 'react-redux';
import Player2 from './Player2';
import { handleIncrement2 } from '../../actions'

const mapStateToProps = (state) => {
    return {
        player2: state.player2,
        server: state.server,
        winner: state.winner,
        player2Name: state.player2Name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement2 : () => dispatch(handleIncrement2()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player2);