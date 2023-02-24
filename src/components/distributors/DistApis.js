export const getDistNursPlus  = () => {
    return fetch(`http://localhost:8088/distributorNurseries?_expand=nursery&_expand=distributor`)
    .then(response => response.json())
}

export const getDistributorsPlus = () => {
    return fetch(`http://localhost:8088/distributors?_embed=retailers&_embed=distributorNurseries`)
    .then(response => response.json())
}

export const getMatchedDistNur = (dN, flowers) => {
    const matchedFlower = flowers.find(flower => flower.nurseryId === dN.nurseryId)
    return matchedFlower
}



// export const get = () => {
//     return fetch(``)
//     .then(response => response.json())
// }


// export const get = () => {
//     return fetch(``)
//     .then(response => response.json())
// }