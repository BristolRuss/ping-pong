export const reset = () => {
    return {
        type: "RESET"
    }
}

export const settings = () => {
    return {
        type: "SETTINGS"
    }
}

export const clear = () => {
    return {
        type: "CLEAR"
    }
}

export const handleIncrement1 = () => {
    return {
        type: "PLAYER1SCORES"
    }
}

export const handleIncrement2 = () => {
    return {
        type: "PLAYER2SCORES"
    }
}

export const save = (p1Name, p2Name, aim, switchOn) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name: p1Name,
        player2Name: p2Name,
        target: +aim,
        alternate: +switchOn
    }
}