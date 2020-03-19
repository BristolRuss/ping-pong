import React from 'react';

const Player2 = ({player2, server, handleIncrement2, winner, player2Name}) =>  (
<div className="col-md-6 mt-4">
    <div className= {server === 2 ? "card text-center bg-dark text-white" : "card text-center" }>
        <h5 className="card-header">{player2Name}</h5>
        <div className="card-body">
            <p className="card-text display-1">{player2}</p>
        </div>
        <div className="card-footer">
            <button  onClick = {winner === 0 ? handleIncrement2 : null} className="form-control btn btn-success">+</button>
        </div>
    </div>
</div>  
       
)

export default Player2;