

export const getNurseriesWithFlowerAndDist = () => {
    return fetch(`http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=distributorNurseries`)
    .then(response => response.json())
}
