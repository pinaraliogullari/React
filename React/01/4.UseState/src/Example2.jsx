import React, { useState } from 'react'

const Example2 = () => {
    const [names, setNames] = useState(["Pınar", "Emre", "Ufuk", "Serkan"]);
    console.log(names)
    return (
        <div>
            {names.map((name, index) => {
                <div key={index}>{name}</div>
            })}
        </div>
    )
}

export default Example2