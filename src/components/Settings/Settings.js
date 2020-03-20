import React, { useState } from 'react';

const Settings = ({ player1Name, player2Name, target, alternate, handleFormSubmit }) =>  {
    const [ p1Name, setP1Name ] = useState(`${player1Name}`);
    const [ p2Name, setP2Name ] = useState(`${player2Name}`);
    const [ aim, setAim ] = useState(`${target}`);
    const [ switchOn, setSwitchOn ] = useState(`${alternate}`);

    const handleP1 = (e) => {
        setP1Name(e.currentTarget.value)
    }

    const handleP2 = (e) => {
        setP2Name(e.currentTarget.value)
    }

    const handleAim = (e) => {
        setAim(e.currentTarget.value)
    }

    const handleSwitch = (e) => {
        setSwitchOn(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(p1Name, p2Name, aim, switchOn)
    }

    return (
        <>
            <h3>Settings</h3>
            <form onSubmit = { handleSubmit } className = "settingsForm">
                <div className = "form-group">
                    <label>Player 1 Name</label>
                    <input onChange = {handleP1} value = {p1Name} className="form-control"></input>
                    <label>Player 2 Name</label>
                    <input onChange = {handleP2} value = {p2Name} className="form-control"></input>
                    <label>Winning Score</label>
                    <input onChange = {handleAim} value = { aim } type = "number" className="form-control"></input>
                    <label>Alternate Every</label>
                    <input onChange = {handleSwitch} value = { switchOn } type = "number" className="form-control"></input>
                    <button className = "btn btn-dark">Save Settings</button>
                </div>
            </form>

            
        </> 
    )  
}

export default Settings;