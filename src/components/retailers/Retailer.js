


/*
Business name
Business address
An unordered list of all flowers that the retailer sells to consumers. Show color, species, and the price that flower. Make sure you add the markup percentage to the price.
An unordered list of distributor business names that the retailer purchases flowers from.
An unordered list of nursery business names that the retailer's distributor purchases flowers from.
*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getMatchedDistNur } from "../distributors/DistApis"

export const Retailer = ({ id, name, address, retMarkup, flowers, distributorObj, distNurseries }) => {
    const navigate = useNavigate()
    if (distNurseries.length === 0 || flowers.length === 0) {
        return null
    }


    
    const purchaseButton = (matchedFlower, finalPrice) => {
        const thornUser = localStorage.getItem("thorn_user")
        const thornUserObject = JSON.parse(thornUser)
        
    const purchaseToAPI = {
        customerId: thornUserObject.id,
        retailerId: id,
        flowerId: matchedFlower.id,
        flowerName: matchedFlower.species,
        cost: parseFloat(finalPrice),
        quantity: 1 
    }

    return fetch(`http://localhost:8088/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchaseToAPI)
    })
        .then(res => res.json())
        .then(() => {

            navigate("/retailers")
        })


    }
    return <>
        <header className="retailer__header">{name}</header>
        <div>{address}</div>
        <ul>
            {
                distNurseries.map(dN => {
                    const matchedFlower = getMatchedDistNur(dN, flowers)
                    const distPrice = matchedFlower.price * ((distributorObj.markup +100) / 100)
                    const finalPrice = (distPrice * ((retMarkup + 100) / 100)).toFixed(2)
                    return <li key={`retFlower--${dN.id}`}>{matchedFlower.color} {matchedFlower.species} Cost: ${finalPrice} <button type="button"
                    onClick={() => purchaseButton(matchedFlower, finalPrice)}
                    >Purchase</button></li>
                })
            }
        </ul>
        <div>{distributorObj.name}</div>
        <ul>
            {
                distNurseries.map(dN => <li key={`nursery--${dN.nursery.id}`} >{dN.nursery.name}</li>)
            }
        </ul>
    </>
}