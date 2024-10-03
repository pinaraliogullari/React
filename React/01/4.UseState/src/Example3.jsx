import React, { useState } from 'react'

const Example3 = () => {
    
    const [count, SetCount] = useState(0);
    const arttir = () => {
        SetCount(count + 1);
    }
    const azalt = () => {
        if (count > 0) {
            SetCount(count - 1);
        }

    }
    console.log("component render edildi")
    return (
        <>
            <div>{count}</div>
            <div><button onClick={arttir} >Arttır</button></div>
            <div><button onClick={azalt} >Azalt</button></div>

        </>

    )
}

export default Example3

//bir statein değeri set metodu kullanılarak değiştirildiğinde component yeniden render edilir. component içerisinde 1000 satır kod varsa tamamı render edilir. bu da uygulamayı oldukça yorar.