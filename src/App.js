import React from "react";

const App = ({player1, player2, server, handleIncrement1, handleIncrement2, reset, winner, deuce, pastGames}) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className= {server === 1 ? "card text-center bg-dark text-white" : "card text-center" }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                      {console.log()}
                        <p className="card-text display-1">{player1}</p>
                    </div>
                    <div className="card-footer">
                        <button  onClick = {winner === 0 ? handleIncrement1 : undefined} className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
              <div className= {server === 2 ? "card text-center bg-dark text-white" : "card text-center" }> 
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{player2}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick = {winner === 0 ? handleIncrement2 : undefined} className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */}
        {deuce === 1 ? <h2 className="alert alert-warning">Deuce!</h2> : undefined}
        {winner >= 1 ? <h2 className="alert alert-success">Player {winner} wins!</h2> : undefined} 

        <hr />

        { /* reset button */}
        <button onClick = { reset } className="btn btn-danger">Reset</button>

        <div>{pastGames}</div>

    </React.Fragment>
);

export default App;