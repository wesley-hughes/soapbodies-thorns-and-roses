import { useEffect, useState } from "react"
import { getDistributorsPlus } from "../distributors/DistApis"
import { getFlowers, matchFlowerObjects } from "../flowers/FlowerPower"
import { getNurseriesWithFlowerAndDist } from "./NurApis"
import { Nursery } from "./Nursery"


export const NurList = ({flowerObjects}) => {

    const [nurseriesPlus, setNurseriesPlus] = useState([])
    const [flowers, setFlowers] = useState([])
    const [distributors, setDistributors] = useState([])


    useEffect(() => {
        getDistributorsPlus()
            .then((data) => setDistributors(data))
        getNurseriesWithFlowerAndDist()
            //http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=distributorNurseries
            .then((data) => setNurseriesPlus(data))
        getFlowers()
            .then((data) => setFlowers(data))
    }, []
    )



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
    <img className="fixed -bottom-28 -right-28" id="bg" src="./img/flowers.png" alt="flowers" />
    <header className="mt-10 mb-8 text-5xl font-light text-center tracking-tight text-cyan-700 dark:text-white">Our Nurseries</header>
    <div className="m-5 flex flex-row flex-wrap justify-center">
        
        {
            nurseriesPlus.map(nurseryPlus => {
                return <Nursery key={`nurseryPlus--${nurseryPlus.id}`}
                    id={nurseryPlus.id}
                    name={nurseryPlus.name}
                    flowers={flowerObjects}
                    distributors={matchDistributorObjects(nurseryPlus)}
                />
            })
        }

</div>
    </>
}