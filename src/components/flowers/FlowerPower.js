
export const getFlowers = () => {
    return fetch(`http://localhost:8088/flowers`)
    .then(response => response.json())
}

export const matchFlowerObjects = (nurseryPlus, flowers) => {
    
    const flowerObjects = nurseryPlus.nurseryFlowers.map(nurseryFlower => {
        const matchingFlower = flowers.find(flower => flower.id === nurseryFlower.flowerId)
        return {
            id: matchingFlower.id,
            species: matchingFlower.species,
            color: matchingFlower.color,
            price: nurseryFlower.price,
            img: matchingFlower.img,
            nurseryId: nurseryFlower.nurseryId
        }
    })
    return flowerObjects
}

