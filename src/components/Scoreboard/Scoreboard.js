import React from 'react';

const Scoreboard = ({ pastGames, player1Name, player2Name }) =>  (
    pastGames.length >= 1 ? <table className="scoreTable">
        <thead>
            <tr>
                <th style={{background: "darkGrey"}}></th>
                <th style={{background: "lightGray"}}>{player1Name}</th>
                <th style={{background: "lightGray"}}>{player2Name}</th>
            </tr>
        </thead>
        <tbody>
        {pastGames.map((game, index) => 
            <tr key={index}>
                <td style={{background: "bisque"}}>Game {index + 1}</td>
                <td style={{background: game.player1.winner ? "lightGreen" : ""}}>{game.player1.score}</td>
                <td style={{background: game.player2.winner ? "lightGreen" : ""}}>{game.player2.score}</td>
            </tr>)} 
        </tbody>
    </table> : ""   
)

export default Scoreboard;