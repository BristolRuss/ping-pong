import React from "react";
import Scoreboard from '../Scoreboard';
import Deuce from '../Deuce';
import Winner from '../Winner';
import Player1 from "../Player1";
import Player2 from "../Player2";
import Buttons from "../Buttons";
import Settings from '../Settings';

const App = ( {gameStarted} ) => (
<>  
    <div className="bg">
        <header className="pingHeader jumbotron mt-4 mb-0">
            <h1 className="headerH1">Ping Pong</h1>
        </header>

        { !gameStarted ? 
        <Settings /> : 
        <>
        <div className="imageLocation row mb-4">
            <Player1 />
            <Player2 />
        </div>

        <Winner />
        <Deuce />

        <Buttons />

        <Scoreboard />
        </>
        }
    </div> 
</>
    
);

export default App;