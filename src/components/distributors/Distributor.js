

/*
Business name
An unordered list of all flowers that the distributor grows. Show color, species, and the price that flower. Make sure you add the markup percentage to the price.
An unordered list of retailer business names that purchases flowers from the distributor.
*/

//BROKEN AF
export const Distributor = ({name, retailers, markup, distributorNurseries, flowers}) => {

    return <>
    <header className="distributor__header">{name}</header>
    <ul>
        {
            distributorNurseries.map(dN => {
                const matchedFlower = flowers.find(flower => flower.nurseryId === dN.nurseryId)
                matchedFlower.price = matchedFlower.price * (markup / 100)
                return <li key={`flower--${dN.id}`}>{matchedFlower.color} {matchedFlower.species} Cost: ${parseFloat(matchedFlower.price, 2)}</li>
            })
        }
    </ul>
    </>
}