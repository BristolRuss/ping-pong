import { connect } from 'react-redux';
import Settings from './Settings';
import { save } from '../../actions';

const mapStateToProps = (state) => {
    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        target: state.target,
        alternate: state.alternate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSubmit: (p1Name, p2Name, aim, switchOn) => dispatch(save(p1Name, p2Name, aim, switchOn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);