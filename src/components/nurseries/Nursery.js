

export const Nursery = ({ id, name, flowers, distributors }) => {


    //     Business name
    // An unordered list of all flowers that the nursery grows. Show color, species, and the price set by the nursery for that flower.
    // An unordered list of distributor business names that purchases flowers from the nursery.


    return  <section className="nursery" key={`nursery__${id}`}>
        <div>
            <header className="nursery__header"><h2>{name}</h2></header>
            <div><h5>Flowers</h5>
            <ul>
            {
                flowers.filter(flower => flower.nurseryId === id)
                .map(flower => <li key={`flower__${flower.species}`}>{flower.color} {flower.species} Cost: ${flower.price} </li>)
            }
        </ul>
        </div>
        <div><h5>Distributors</h5>
            <ul>
                {
                    distributors.map(distributor => <li key={`distributor${distributor.id}`}>Distributor: {distributor.name}</li> )
                }
        </ul>
        </div>
        </div>
        </section>
}