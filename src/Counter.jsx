import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd =()=>{
        const newCount = count + 1;
        setCount(newCount);

    }

    const handleReduce = ()=>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <div style={{border: '3px solid tomato'}}>
            <h3>Counter : {count} </h3>
            <button style={{background: 'tomato', padding: '10px 50px', marginBottom: '30px'}} onClick={handleAdd}>Add</button>
            <button style={{background: 'yellow', padding: '10px 50px', marginLeft: '30px'}} onClick={handleReduce}>Add</button>
        </div>
    )
}