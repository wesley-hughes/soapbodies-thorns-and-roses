import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, set] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}&password=${password}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("thorn_user", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/home")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }


 
    return (
        <main className="container--login">
            <section className="flex justify-around items-center">
                <div className="flex-col text-center mt-8">
                    <img src="../img/logo.png" alt="logo" />
                    <p className="text-3xl text-slate-700 font-medium drop-shadow-lg">THORNS-&-ROSES</p>
                    <p className="text-xs pt-3 text-cyan-700">god made dirt, so dirt don't hurt</p>
                </div>
                <div className="w-full max-w-sm mt-8 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="form--login space-y-6" onSubmit={handleLogin}>
                        <h1 className="text-xl font-medium text-slate-600 dark:text-white">Sign in</h1>
                        <fieldset>
                            <label className="block text-sm font-medium text-cyan-800 dark:text-white" htmlFor="inputEmail">email</label>
                            <br></br>
                            <input type="email"
                                value={email}
                                onChange={evt => set(evt.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="email address"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <label className="block text-sm font-medium text-cyan-800 dark:text-white" htmlFor="password">password</label>
                            <br></br>
                            <input type="password"
                                value={password}
                                onChange={evt => setPassword(evt.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
                                name="password" placeholder="password" />
                        </fieldset>
                        <fieldset>
                            <button className="w-full text-white bg-cyan-800 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800" type="submit">
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                    <div class="text-sm font-medium text-slate-500 text-right dark:text-slate-300">
                        Not registered?<Link className="text-cyan-700 hover:underline dark:text-cyan-600" to="/register"> Create an account.</Link>
                    </div>
                </div>
            </section>

        </main>
    )
}

