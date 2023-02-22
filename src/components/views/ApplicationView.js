import { DistList } from "../distributors/DistList"
import { NurseryList } from "../nurseries/NurList"
import { RetList } from "../retailers/RetList"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={<>
            <h1>Thorns & Roses</h1>
            <p>God made dirt, so dirt don't hurt.</p>
            </>}>
                <Route path="/nurseries" element={<NurList /> } />
                <Route path="/distributors" element={<DistList /> } />
                <Route path="/retailers" element={<RetList /> } />
            </Route>
        </Routes>
    </>
}