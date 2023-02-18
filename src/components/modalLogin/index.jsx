import React, { useState } from "react"
import "./styles.scss"

export function ModalLogin() {
    const [valueUserName, setValueUsername] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const users = [
        {
            id: 1,
            name: "jirakiller",
            password: "teste123"
        }
    ]

    function handleSubmitLogin(event) {
        event.preventDefault();
        const user = users.find(param => param.name === valueUserName && param.password === valuePassword)
        if (user) {
            alert("Login feito com sucesso!");
            setIsLoggedIn(true)
        } else {
            alert("nome ou senha incorretos");
        }
    }

    return (
        <main className='modal-login'>
            {isLoggedIn 
            ? <h1>Logado</h1> 
            : 
            <>
                <h1>Entre com sua conta</h1>
                <form className='username-and-password-login' onSubmit={handleSubmitLogin}>
                    <input type="text" onChange={event => setValueUsername(event.target.value)} placeholder='Digite seu nome' />
                    <input type="password" onChange={event => setValuePassword(event.target.value)} placeholder='Digite sua senha' />
                    <button className='button-login'>Logar</button>
                </form>
            </>
            }
        </main>
    )
}