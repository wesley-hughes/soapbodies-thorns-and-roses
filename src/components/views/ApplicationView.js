import { Outlet, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { DistList } from "../distributors/DistList"
import { NurList } from "../nurseries/NurList"
import { RetList } from "../retailers/RetList"

export const ApplicationViews = () => {
    const [nurseryFlowers, setNurFlowers] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:8088/nurseryFlowers?_expand=flower`)
            .then(response => response.json())
            .then(data => setNurFlowers(data))
    }, []) 
  
    
    const getFlowerObjects = (nurseryFlowers) => {
        
        const flowerObjects = nurseryFlowers.map(nurseryFlower => {
            //const matchingFlower = flowers.find(flower => flower.id === nurseryFlower.flowerId)
            return {
                id: nurseryFlower.flowerId,
                species: nurseryFlower.flower.species,
                color: nurseryFlower.flower.color,
                price: nurseryFlower.price,
                nurseryId: nurseryFlower.nurseryId
            }
        })
        return flowerObjects
    }

    return <>
        <Routes>
            <Route path="/" element={<>
                <header className="text-3xl mt-4">Thorns & Roses</header>
                <p className="mb-5">God made dirt, so dirt don't hurt.</p>
                <Outlet />
            </>}>

                <Route path="nurseries" element={<NurList flowerObjects={getFlowerObjects(nurseryFlowers)}/> } />
                <Route path="distributors" element={<DistList flowerObjects={getFlowerObjects(nurseryFlowers)} />} />
                {<Route path="/retailers" element={<RetList flowerObjects={getFlowerObjects(nurseryFlowers)} /> } />}
            </Route>
        </Routes>
    </>
}