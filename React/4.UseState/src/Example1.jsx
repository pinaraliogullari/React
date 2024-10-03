import React, { useState } from 'react'

const Example1 = () => {
    const [firstName, setFirstName] = useState("Pınar");
    const [lastName, setLastName] = useState("Alioğulları");

    const handleChange = () => {
        setFirstName("Emre")
    }
    return (
        <>
            <div>{firstName}</div>
            <div><button onClick={handleChange}>İsmi Değiştir</button></div>
        </>
        //ya da direkt onclick olduğunda setFirstName i çalıştırabiliriz.
        // <div><button onClick={()=>{setFirstName("Emre")}}>İsmi Değiştir</button></div>
    )
}

export default Example1

