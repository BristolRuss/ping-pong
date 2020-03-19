import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';

const mapStateToProps = (state) => {
    return {
        pastGames: state.pastGames
    }
}

export default connect(mapStateToProps)(Scoreboard);