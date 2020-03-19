import { connect } from 'react-redux';
import Player2 from './Player2';

const mapStateToProps = (state) => {
    return {
        player2: state.player2,
        server: state.server,
        winner: state.winner,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement2 : () => dispatch({ type: "PLAYER2SCORES" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player2);