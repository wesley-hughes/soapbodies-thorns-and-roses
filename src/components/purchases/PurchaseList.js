import { Fragment, useEffect, useState } from "react"


export const PurchaseList = () => {

    const [purchases, setPurchases] = useState([])

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

    const groupedPurchases = purchases.reduce((acc, purchase) => {
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
        <img className="fixed -bottom-28 -right-28" id="bg" src="./img/flowers.png" alt="flowers" />
        <div class="relative overflow-x-auto shadow-md mx-28 my-28 sm:rounded-lg">
            <table className="w-full text-sm text-left text-cyan-700 opacity-90 dark:text-slate-400">
                <thead className="text-2xl  text-cyan-600 break uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr><th scope="col" className="px-6 py-3 font-light">Flower</th><th scope="col" className="px-6 py-3 font-light">Quantity</th><th scope="col" className="px-6 py-3 font-light">Cost</th></tr>
                </thead>
                {
                    groupedPurchases.map(purchase => {
                        return <Fragment key={purchase.id}>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-cyan-700 whitespace-nowrap dark:text-white">{purchase.flowerName}</th>
                                <td className="px-6 py-4">{purchase.quantity}</td>
                                <td className="px-6 py-4">{parseFloat(purchase.cost).toFixed(2)}</td>
                            </tr>
                        </Fragment>
                    })
                }
            </table>
        </div>
    </>
}