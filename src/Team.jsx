import { useState } from "react"

export default function Team (){
    const [team, setTeam] = useState(55);

    const handleAdd = ()=>{
        const newTeam = team +1;
        setTeam(newTeam);
    }
    const handleRemove = ()=>{
        setTeam(team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
        color: 'tomato'
    }
    return(
        <div style={teamStyle}>
            <h3>Players : {team} </h3>
            <button style={{background: 'tomato', padding: '10px 50px', marginBottom: '30px'}} onClick={handleAdd}>Add Player</button>
            <button style={{background: 'yellow', padding: '10px 50px', marginLeft: '30px'}} onClick={handleRemove}>Remove Player</button>
        </div>
    )
}