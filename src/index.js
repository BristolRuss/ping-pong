import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import reducer from './reducer'
import initial from './initial'

const store = createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    let state = store.getState();
    });
    
const render = () => {
        let state = store.getState();
        const handleIncrement1 = () => store.dispatch({ type: "PLAYER1SCORES" })
        const handleIncrement2 = () => store.dispatch({ type: "PLAYER2SCORES" })
        const reset = () => store.dispatch({ type: "RESET" })

    ReactDOM.render(<App 
        player1 = {state.player1}
        player2 = {state.player2}
        server = {state.server}
        handleIncrement1 = {handleIncrement1}
        handleIncrement2 = {handleIncrement2}
        reset = {reset}
        winner = {state.winner}
        deuce = {state.deuce}
        pastGames = {state.pastGames}
        />, document.getElementById('root'));
}

store.subscribe(render);
render();