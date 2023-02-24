import { Fragment, useEffect, useState } from "react"


export const PurchaseList = () => {

    const [purchases, setPurchases] = useState ([])

    const thornUser = localStorage.getItem("thorn_user")
    const thornUserObject = JSON.parse(thornUser)



    useEffect(
        () => {
    fetch(`http://localhost:8088/purchases?customerId=${thornUserObject.id}`)
        .then(res => res.json())
        .then((data) => {
            setPurchases(data)
        })
    }, []
    )

    const groupedPurchases = purchases.reduce( (acc, purchase) => {
        const matchedPurchase = acc.find(acc => acc.flowerId === purchase.flowerId)
        if (matchedPurchase) {
            matchedPurchase.quantity += purchase.quantity
            matchedPurchase.cost += purchase.cost
        } else {
            acc.push(purchase)
        }
        return acc
    }, []

     )


    return <>
    <table>
        <tr><th>Flower</th><th>Quantity</th><th>Cost</th></tr>
    {
        groupedPurchases.map(purchase => {
            return <Fragment key={purchase.id}>
           <tr><td>{purchase.flowerName}</td><td>{purchase.quantity}</td><td>{parseFloat(purchase.cost).toFixed(2)}</td></tr>
           </Fragment>
            })
    }
    </table>
    </>
}