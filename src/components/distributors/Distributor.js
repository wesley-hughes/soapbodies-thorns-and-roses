

/*
Business name
An unordered list of all flowers that the distributor grows. Show color, species, and the price that flower. Make sure you add the markup percentage to the price.
An unordered list of retailer business names that purchases flowers from the distributor.
*/

import { getMatchedDistNur } from "./DistApis"


export const Distributor = ({name, retailers, markup, distributorNurseries, flowers}) => {
    // This is to make sure that our fetch race doesn't let flowers finish last so that they populate when we need them to



    if (flowers.length === 0) {
        return null
    }
    return <>
    <div className="nursery max-w-sm m-2 w-full p-2 text-center bg-white opacity-70 border-2 border-red-200 rounded-lg shadow-lg dark:bg-slate-800 dark:border-gray-700 hover:scale-105 hover:opacity-100">
    <header className="distributor__header badge"><h2>{name}</h2></header>
        <div><h5 className="text-lg mt-2 font-semibold tracking-tight text-cyan-800 dark:text-white">Flowers</h5>
         <ul>
        {
            distributorNurseries.map(dN => {
                const matchedFlower = getMatchedDistNur(dN, flowers)
                const distMarkup = (matchedFlower.price * ((markup +100) / 100)).toFixed(2)

                return <div key={`flower--${dN.id}`} className="text-sm font-light tracking-tight text-slate-600 dark:text-white">{matchedFlower.species}, {matchedFlower.color} --${distMarkup}</div>
            })
        }
        </ul>
        </div>
        <div><h5 className="text-lg mt-2 font-semibold tracking-tight text-cyan-800 dark:text-white">Retailers</h5>
        <ul>
        {
            retailers.map(retailer => <div key={`retailer--${retailer.id}`} className="text-sm font-light tracking-tight text-slate-600 dark:text-white">{retailer.name}</div>)
        }
         </ul>
        </div>
    </div>
    </>
}