import { Outlet, Route, Routes } from "react-router-dom"
import { DistList } from "../distributors/DistList"
import { NurList } from "../nurseries/NurList"
import { RetList } from "../retailers/RetList"

export const ApplicationViews = () => {
    
    return <>
        <Routes>
            <Route path="/" element={<>
                <h1>Thorns & Roses</h1>
                <p>God made dirt, so dirt don't hurt.</p>
                <Outlet />
            </>}>
                <Route path="nurseries" element={<NurList /> } />
                {/* <Route path="/distributors" element={<DistList flowers={flowers} />} /> */}
                {/*<Route path="/retailers" element={<RetList /> } /> */}
            </Route>
        </Routes>
    </>
}