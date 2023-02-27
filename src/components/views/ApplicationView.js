import { Outlet, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { DistList } from "../distributors/DistList"
import { NurList } from "../nurseries/NurList"
import { RetList } from "../retailers/RetList"
import { PurchaseList } from "../purchases/PurchaseList"
import { Home } from "../home/Home"

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
                img: nurseryFlower.flower.img,
                nurseryId: nurseryFlower.nurseryId
            }
        })
        return flowerObjects
    }

    return <>
        <Routes>
            <Route path="/" element={<>

                <Outlet />
            </>}>
                <Route path="home" element={<Home />} />
                <Route path="nurseries" element={<NurList flowerObjects={getFlowerObjects(nurseryFlowers)} />} />
                <Route path="distributors" element={<DistList flowerObjects={getFlowerObjects(nurseryFlowers)} />} />
                <Route path="purchaseList" element={<PurchaseList />} />
                {<Route path="/retailers" element={<RetList flowerObjects={getFlowerObjects(nurseryFlowers)} />} />}

            </Route>
        </Routes>
    </>
}