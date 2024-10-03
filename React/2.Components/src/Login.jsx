import React from 'react'
//sadece export dersek, componentin tamamı değil sadece ilgili kısım export edilmiş oluyor.
export const users=[
    {
        username:"Pinar",
        password:"1"
    },
    {
        username:"emre",
        password:"2"
    }
]
const Login = () => {
    return (
        <>
            <div>
                <p>Kullanıcı Adınız:</p>
                <input type='text' />
            </div>
            <div>
                <p>Şifreniz:</p>
                <input type='text' />
            </div>

            <button>Giriş Yap</button>
        </>
    )
}

export default Login //export default sayesinde component içindeki her şey export edilir. 