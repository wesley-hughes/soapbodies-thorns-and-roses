export const getDistributors  = () => {
    return fetch(`http://localhost:8088/distributors`)
    .then(response => response.json())
}

export const getDistributorsPlus = () => {
    return fetch(`http://localhost:8088/distributors?_embed=retailers&_embed=distributorNurseries`)
    .then(response => response.json())
}


// export const get = () => {
//     return fetch(``)
//     .then(response => response.json())
// }


// export const get = () => {
//     return fetch(``)
//     .then(response => response.json())
// }