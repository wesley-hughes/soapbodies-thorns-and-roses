export const getRetailers = () => {
    return fetch(`http://localhost:8088/retailers`)
    .then(response => response.json())
}


export const getRetailersWithDistributors = () => {
    return fetch(`http://localhost:8088/retailers?_expand=distributor`)
    .then(response => response.json())
}


// export const get = () => {
//     return fetch(``)
//     .then(response => response.json())
// }