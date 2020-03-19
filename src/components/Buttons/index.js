import { connect } from "react-redux";
import Buttons from './Buttons';
import { reset, settings, clear } from '../../actions';

const mapDispatchToProps = dispatch => {
    return {
        reset : () => dispatch(reset()),
        settings: () => dispatch(settings()),
        clear : () => dispatch(clear())
    }
};

export default connect(null, mapDispatchToProps)(Buttons);