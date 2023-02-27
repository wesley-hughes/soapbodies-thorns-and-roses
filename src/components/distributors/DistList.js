import { useEffect, useState } from "react"
import { getNurseriesWithFlowerAndDist } from "../nurseries/NurApis"
import { getDistributors, getDistributorsPlus } from "./DistApis"
import { Distributor } from "./Distributor"

/*
Business name
An unordered list of all flowers that the distributor grows. 
distributor >> distributorNurseries >> nurseryFlowers >> flowers

Show color, species, and the price that flower. Make sure you add the markup percentage to the price.
An unordered list of retailer business names that purchases flowers from the distributor.
*/


export const DistList = ({flowerObjects}) => {
    const [distributorsPlus, setDistributorsPlus] = useState([])
    const [nurseriesPlus, setNurseriesPlus] = useState([])
    


    useEffect(() => {
        getDistributorsPlus()
        // Fetching from "http://localhost:8088/distributors?_embed=retailers&_embed=distributorNurseries"
        .then((data) => setDistributorsPlus(data))
        getNurseriesWithFlowerAndDist()
        .then((data) => setNurseriesPlus(data)) 
    },[]
    )

    return <>
    <img className="fixed -bottom-28 -right-28" id="bg" src="./img/flowers.png" alt="flowers" />
    <header className="mt-10 mb-8 text-5xl font-light text-center tracking-tight text-cyan-700 dark:text-white">Our Distributors</header>
    <div className="m-5 flex flex-row flex-wrap justify-center">
        
            {
                distributorsPlus.map(distributorPlus => <Distributor key={`distributor--${distributorPlus.id}`} 
                name={distributorPlus.name}
                retailers={distributorPlus.retailers}
                markup={distributorPlus.markup}
                distributorNurseries={distributorPlus.distributorNurseries}
                flowers={flowerObjects}
                
                />)
        
    }
    </div>
    </>
}