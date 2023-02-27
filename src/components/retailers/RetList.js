import { useEffect, useState } from "react"
import { getDistNursPlus } from "../distributors/DistApis"
import { getRetailersWithDistributors } from "./RetApis"
import { Retailer } from "./Retailer"

export const RetList = ({flowerObjects}) => {
    const [retailers, setRetailers] = useState([])
    const [distNursPlus, setDistNursPlus] = useState([])

    useEffect(
        () => {
            getRetailersWithDistributors()
                // Fetching from "http://localhost:8088/retailers?_expand=distributor"
                .then(data => setRetailers(data))
            getDistNursPlus()
                // Fetching from "http://localhost:8088/distributorNurseries?_expand=nursery&_expand=distributor"
                .then(data => setDistNursPlus(data))
        }, []
    )

    const matchDistNurseriesToRetailer = (retailer) => {
        const matchingDistNurs = distNursPlus.filter(dN => dN.distributorId === retailer.distributorId)
        return matchingDistNurs
    }

    return <>
    <img className="fixed -bottom-28 -right-28" id="bg" src="./img/flowers.png" alt="flowers" />
    <header className="mt-10 mb-8 text-5xl font-light text-center tracking-tight text-cyan-700 dark:text-white">Our Retailers</header>
    <div className="break"></div>
        <section className="retailers ">
            {
                retailers.map(retailer => <Retailer key={`retailer--${retailer.id}`}
                id={retailer.id}
                name={retailer.name}
                address={retailer.address}
                retMarkup={retailer.markup}
                flowers={flowerObjects}
                distributorObj={retailer.distributor}
                distNurseries={matchDistNurseriesToRetailer(retailer)}
                />)
            }
        </section>
    </>
}