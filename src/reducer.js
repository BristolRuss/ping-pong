import initial from "./initial";

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });

const server = state => {
    const total = state.player1 + state.player2
    if (state.deuce === 1){
        return{
            ...state,
            server: (Math.floor((total) / 2) % 2 + 1),
        }
    }  
	else return {
        ...state,
        server: (Math.floor((total) / state.alternate) % 2 + 1)
    };
}
const winner = state => {
    const updatedGame = [...state.pastGames, 
        {
            player1: {score: state.player1, winner: state.player1 > state.player2}, 
            player2: {score: state.player2, winner: state.player2 > state.player1}
        }
        ]

    if (state.player1 >= state.target && (state.player1 - state.player2) >= 2){
        return{
        ...state,
        winner: 1,
        pastGames: updatedGame
        }
    }
    else if ((state.player2 >= state.target && (state.player2 - state.player1)) >= 2){
        return{
        ...state,
        winner: 2,
        pastGames: updatedGame
        }
    }
    //works out if the game needs to go to deuce. This is for the serving mechanic
    if (state.player1 >= state.target -1 && state.player2 >= state.target - 1){
        return{
            ...state,
            deuce: 1
        }
    }
    else return state
}

const reset = state => {
    return{
        ...state,
        player1: 0,
        player2: 0,
        server: 1,
        winner: 0,
        deuce: 0,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
    case "PLAYER1SCORES": return winner(server(player1(state)));
    case "PLAYER2SCORES": return winner(server(player2(state)));
    case "RESET": return reset(state);
    case "SETTINGS" : return {...state, gameStarted: false}
    case "CLEAR" : return initial;
    case "SAVE_SETTINGS" : return {
         ...state,
        player1Name: action.player1Name,
        player2Name: action.player2Name,
        target: action.target,
        alternate: action.alternate,
        gameStarted: true
    }
    default: return state;
    }
};

export default reducer;