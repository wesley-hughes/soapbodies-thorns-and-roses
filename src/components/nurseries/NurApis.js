export const getDistributors  = () => {
    return fetch(`http://localhost:8088/distributors`)
    .then(response => response.json())
}

export const getFlowers = () => {
    return fetch(`http://localhost:8088/flowers`)
    .then(response => response.json())
}

export const getNurseriesWithFlowerAndDist = () => {
    return fetch(`http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=distributorNurseries`)
    .then(response => response.json())
}
