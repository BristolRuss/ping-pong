import { connect } from 'react-redux';
import Player1 from './Player1';
import { handleIncrement1 } from '../../actions'

const mapStateToProps = (state) => {
    return {
        player1: state.player1,
        server: state.server,
        winner: state.winner,
        player1Name: state.player1Name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement1 : () => dispatch(handleIncrement1()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player1);