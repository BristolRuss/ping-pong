import { connect } from "react-redux";
import Buttons from './Buttons'

const mapDispatchToProps = dispatch => {
    return {
        reset : () => dispatch({ type: "RESET" }),
        clear : () => dispatch({ type: "CLEAR" })
    }
};

export default connect(null, mapDispatchToProps)(Buttons);