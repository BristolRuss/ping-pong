import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';

const mapStateToProps = (state) => {
    return {
        pastGames: state.pastGames,
        player1Name: state.player1Name,
        player2Name: state.player2Name
    }
}

export default connect(mapStateToProps)(Scoreboard);