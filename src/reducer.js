import initial from './initial'

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
        server: total % 10 <= 4 ? 1 : 2
    };
}
const winner = state => {
    // const updatedGame = [...state, {player1: state.player1, player2: state.player2}]

    if (state.player1 >= 21 && (state.player1 - state.player2) >= 2){
        return{
        ...state,
        winner: 1,
        // pastGames: updatedGame
        }
    }
    else if ((state.player2 >= 21 && (state.player2 - state.player1)) >= 2){
        return{
        ...state,
        winner: 2,
        // pastGames: updatedGame
        }
    }
    //works out if the game needs to go to deuce. This is for the serving mechanic
    if (state.player1 >= 20 && state.player2 >= 20){
        return{
            ...state,
            deuce: 1
        }
    }
    else return state
}

const reducer = (state, action) => {
    switch (action.type) {
    case "PLAYER1SCORES": return winner(server(player1(state)));
    case "PLAYER2SCORES": return winner(server(player2(state)));
    case "RESET": return initial
    default: return state;
    }
};

export default reducer;