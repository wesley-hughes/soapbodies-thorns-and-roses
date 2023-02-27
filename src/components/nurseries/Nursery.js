

export const Nursery = ({ id, name, flowers, distributors }) => {


    //     Business name
    // An unordered list of all flowers that the nursery grows. Show color, species, and the price set by the nursery for that flower.
    // An unordered list of distributor business names that purchases flowers from the nursery.



    return  <section className="nursery max-w-sm m-2 w-full p-2 text-center bg-white opacity-70 border-2 border-red-200 rounded-lg shadow-lg dark:bg-slate-800 dark:border-gray-700 hover:scale-105 hover:opacity-100" key={`nursery__${id}`}>
        <div>
            <div className="nursery__header badge"><div>{name}</div></div>
            <div><h5 className="text-lg mt-2 font-semibold tracking-tight text-cyan-800 dark:text-white">Flowers</h5>
            <ul>
            {
                flowers.filter(flower => flower.nurseryId === id)
                .map(flower => <li className="text-sm font-light tracking-tight text-slate-600 dark:text-white" key={`flower__${flower.species}`}>{flower.species}, {flower.color} -- ${flower.price} </li>)
            }
        </ul>
        </div>
        <div><h5 className="text-lg mt-2 font-semibold tracking-tight text-cyan-800 dark:text-white">Distributors</h5>
            <ul className="mb-4">
                {
                    distributors.map(distributor => <li className="text-sm font-light tracking-tight text-slate-600 dark:text-white" key={`distributor${distributor.id}`}>{distributor.name}</li> )
                }
        </ul>
        </div>
        </div>
        </section>
}