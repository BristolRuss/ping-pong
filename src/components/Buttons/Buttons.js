import React from 'react';

const Buttons = ({reset, settings, clear}) =>  (
<div className = "buttonsBar">
    <button onClick = { reset } className="btn btn-danger">New Game</button>
    <button onClick = { settings } className="btn btn-warning  ">Settings</button>
    <button onClick = { clear } className="btn btn-danger">Hard Reset</button>
</div>
)

export default Buttons;