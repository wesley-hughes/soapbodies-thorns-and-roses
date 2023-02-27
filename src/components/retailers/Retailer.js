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
        <div className="flex flex-row justify-left mt-8">
            <section className="ml-12 mr-10">
                <header className="retailer__header text-3xl text-cyan-800 font-semibold mt-2">{name}</header>
                <div className="cardText">{address}</div>
            </section>
            <section className="ml-5 mr-10">
                <div className="smallHeader">Supplying Nurseries:</div>
                <div className="cardText">
                    {
                        distNurseries.map(dN => <div key={`nursery--${dN.nursery.id}`} className="cardText" >{dN.nursery.name}</div>)
                    }
                </div>
            </section>
            <section className="ml-5 mr-10">
                <div className="smallHeader">Distributed by:</div>
                <div className="cardText">{distributorObj.name}</div>
            </section>
        </div>
        <div className="flex flex-row justify-center mt-6">
            {
                distNurseries.map(dN => {
                    const matchedFlower = getMatchedDistNur(dN, flowers)
                    const distPrice = matchedFlower.price * ((distributorObj.markup + 100) / 100)
                    const finalPrice = (distPrice * ((retMarkup + 100) / 100)).toFixed(2)
                    return <div key={`retFlower--${dN.id}`} className=" m-5 p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <img className="rounded-t-lg h-[250px] w-[300px]" src={matchedFlower.img} alt="flower" />
                        <div className="mb-2 text-lg mt-2 font-semibold tracking-tight text-cyan-800 dark:text-white">{matchedFlower.species}, {matchedFlower.color}</div>
                        <div className="mb-3 text-sm font-light tracking-tight text-slate-600 dark:text-white">${finalPrice}</div>
                        <button type="button"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-slate-100 bg-cyan-800 rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                            onClick={() => purchaseButton(matchedFlower, finalPrice)}>
                            <div className="ml-2 mr-2"> Purchase </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                        </button>

                    </div>
                })
            }

        </div>

        <div className="break"></div>

    </>
}