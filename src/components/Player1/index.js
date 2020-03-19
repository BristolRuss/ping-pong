import { connect } from 'react-redux';
import Player1 from './Player1';

const mapStateToProps = (state) => {
    return {
        player1: state.player1,
        server: state.server,
        winner: state.winner,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement1 : () => dispatch({ type: "PLAYER1SCORES" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player1);