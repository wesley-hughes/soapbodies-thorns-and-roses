import { useEffect, useState } from "react"
import { getDistributors, getFlowers, getNurseriesWithFlowerAndDist } from "./NurApis"

/*
*/

export const NurList = () => {
    const [nurseriesPlus, setNurseriesPlus] = useState([])
    const [flowers, setFlowers] = useState([])
    const [distributors, setDistributors] = useState([])


    useEffect(() => {
        getNurseriesWithFlowerAndDist()
            //http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=distributorNurseries
            .then((data) => setNurseriesPlus(data))
        getFlowers()
            .then((data) => setFlowers(data))
        getDistributors()
            .then((data) => setDistributors(data))
    }, []
    )


    //     Business name
    // An unordered list of all flowers that the nursery grows. Show color, species, and the price set by the nursery for that flower.
    // An unordered list of distributor business names that purchases flowers from the nursery.

    const matchFlowerObjects = (nurseryPlus) => {
        const flowerObjects = flowers.filter(flower => flower.id === nurseryPlus.nurseryFlowers.flowerId)
        return flowerObjects
    }
    const matchDistributorObjects = (nurseryPlus) => {
        const distributorObjects = distributors.filter(distributor => distributor.id === nurseryPlus.distributorNurseries.distributorId)
        return distributorObjects
    }

    return <>
        {
            nurseriesPlus.map(nurseryPlus => {
                return <Nursery key={`nurseryPlus--${nurseryPlus.id}`}
                    id={nurseryPlus.id}
                    name={nurseryPlus.name}
                    flowers={matchFlowerObjects(nurseryPlus)}
                    distributors={matchDistributorObjects(nurseryPlus)}
                />
            })
        }


    </>
}