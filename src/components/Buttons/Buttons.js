import React from 'react';

const Buttons = ({reset, clear}) =>  (
<div>
    <button onClick = { reset } className="btn btn-danger">Reset Game</button>
    <button style = {{float: "right"}} onClick = { clear } className="btn btn-danger">Clear History</button>
</div>
)

export default Buttons;