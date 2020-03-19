import React from "react";
import Scoreboard from './components/Scoreboard';
import Deuce from './components/Deuce';
import Winner from './components/Winner';
import Player1 from "./components/Player1";
import Player2 from "./components/Player2";
import Buttons from "./components/Buttons"

const App = () => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <Player1 />
            <Player2 />
        </div>

        { /* winner and deuce banners */}
        <Winner />
        <Deuce />
        
        <hr />

        { /* reset and clear buttons */}
        <Buttons />

        <Scoreboard />

    </React.Fragment>
);

export default App;