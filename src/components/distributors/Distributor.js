

/*
Business name
An unordered list of all flowers that the distributor grows. Show color, species, and the price that flower. Make sure you add the markup percentage to the price.
An unordered list of retailer business names that purchases flowers from the distributor.
*/

import { getMatchedDistNur } from "./DistApis"

//BROKEN AF
export const Distributor = ({name, retailers, markup, distributorNurseries, flowers}) => {
    // This is to make sure that our fetch race doesn't let flowers finish last so that they populate when we need them to
    if (flowers.length === 0) {
        return null
    }
    return <>
    <div>
    <header className="distributor__header"><h2>{name}</h2></header>
        <div><h5>Flowers</h5>
         <ul>
        {
            distributorNurseries.map(dN => {
                const matchedFlower = getMatchedDistNur(dN, flowers)
                const distMarkup = (matchedFlower.price * ((markup +100) / 100)).toFixed(2)

                return <li key={`flower--${dN.id}`}>{matchedFlower.color} {matchedFlower.species} Cost: ${distMarkup}</li>
            })
        }
        </ul>
        </div>
        <div><h5>Retailers</h5>
        <ul>
        {
            retailers.map(retailer => <li key={`retailer--${retailer.id}`}>{retailer.name}</li>)
        }
         </ul>
        </div>
    </div>
    </>
}