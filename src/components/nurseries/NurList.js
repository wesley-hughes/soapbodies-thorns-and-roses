import { useEffect, useState } from "react"
import { getDistributors } from "../distributors/DistApis"
import { getFlowers, matchFlowerObjects } from "../flowers/FlowerPower"
import { getNurseriesWithFlowerAndDist } from "./NurApis"
import { Nursery } from "./Nursery"


export const NurList = ({flowers}) => {
    const [nurseriesPlus, setNurseriesPlus] = useState([])
    const [flowers, setFlowers] = useState([])
    const [distributors, setDistributors] = useState([])


    useEffect(() => {
        getDistributors()
            .then((data) => setDistributors(data))
        getNurseriesWithFlowerAndDist()
            //http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=distributorNurseries
            .then((data) => setNurseriesPlus(data))
        getFlowers()
            .then((data) => setFlowers(data))
    }, []
    )

    // const flowerObjects = flowers.filter(flower => flower.id === nurseryPlus.nurseryFlowers.flowerId)
    //     flowerObjects.map(flowerObject => )
    //     return flowerObjects

    //     Business name
    // An unordered list of all flowers that the nursery grows. Show color, species, and the price set by the nursery for that flower.
    // An unordered list of distributor business names that purchases flowers from the nursery.


    // const matchFlowerObjects = (nurseryPlus) => {
    //     let nurseryArray = []

    //     nurseryPlus.nurseryFlowers.map(nurseryFlower => {
    //         flowers.find(flower => flower.id === nurser)
    //         const foundFlower = nurseryFlower.find(nf => nf.flowerId === )
    //         return foundFlower
    //     }
    //     )
    // 


    const matchDistributorObjects = (nurseryPlus) => {
        const distributorObjects = []
        nurseryPlus.distributorNurseries.map(distributorNursery => {
            const matchingDistributor = distributors.find(distributor => distributor.id === distributorNursery.distributorId)
            distributorObjects.push(matchingDistributor)

        }
        )
        return distributorObjects
    }

    return <>
        {
            nurseriesPlus.map(nurseryPlus => {
                return <Nursery key={`nurseryPlus--${nurseryPlus.id}`}
                    id={nurseryPlus.id}
                    name={nurseryPlus.name}
                    flowerObjects={matchFlowerObjects(nurseryPlus, flowers)}
                    distributors={matchDistributorObjects(nurseryPlus)}
                />
            })
        }


    </>
}