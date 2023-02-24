import { Route , Routes } from "react-router-dom"
import { ApplicationViews } from "./views/ApplicationView"
import { Authorized } from "./views/Authorized"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
/* import "./ThornsAndRoses.css" */

export const ThornsAndRoses = () => {

    return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route path="*" element={
        <Authorized>
            <>
                <NavBar />
                <ApplicationViews />
            </>
        </Authorized>

    } />
    {/* <Route path="*"  element={ 
        <>
    <NavBar />
    <ApplicationViews /> 
    </> } /> */}
    
</Routes>
}