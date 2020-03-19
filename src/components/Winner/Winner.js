import React from 'react';

const Winner = ({winner, player1Name, player2Name}) =>  (
    winner >= 1 ? <h2 className="alert alert-success">{winner === 1 ? player1Name: player2Name} wins!</h2> : null
)

export default Winner;