import { useEffect, useState } from "react"
import { getFlowers, matchFlowerObjects } from "../flowers/FlowerPower"
import { getNurseriesWithFlowerAndDist } from "../nurseries/NurApis"
import { getDistributors, getDistributorsPlus } from "./DistApis"

/*
Business name
An unordered list of all flowers that the distributor grows. 
distributor >> distributorNurseries >> nurseryFlowers >> flowers

Show color, species, and the price that flower. Make sure you add the markup percentage to the price.
An unordered list of retailer business names that purchases flowers from the distributor.
*/


export const DistList =() => {
    const [distributorsPlus, setDistributorsPlus] = useState([])
    const [flowers, setFlowers] = useState([])
    const [nurseriesPlus, setNurseriesPlus] = useState([])
    


    useEffect(() => {
        getDistributorsPlus()
        .then((data) => setDistributorsPlus(data))
        getNurseriesWithFlowerAndDist()
        .then((data) => setNurseriesPlus(data)) 
        getFlowers()
        .then((data) => setFlowers(data))
    },[]
    )

    return <section className="">
        {/* <ul>
            {
                distributorsPlus.map(distributorPlus => <Distributor key={`distributor--${distributor.id}`} 
                name={distributor.name}
                retailers={distributor.retailers}
                
                />)
            }
        </ul>
     */}
    </section>
}