import ItemCount from './ItemCount.jsx'

function ItemCard({ item }) {

    return (
        <>
            <img className="card-img-top az-image" src={item.imageURL}></img>
            <h1 className="az-card-title fw-bold mb-0">{item.name}</h1> 
            <p className="mb-0">${item.price.toFixed(2)}</p>
            <p className="mb-0">{item.description}</p>
            <p>Quantity: <span className="az-stock-qty">{item.stock.quantity}</span></p>
            {(item.stock.available) ? "" : (<p className="az-sold-out d-flex justify-content-center align-items-center mb-1">Sold Out!</p>)}
            <span className="mt-auto d-flex justify-content-center align-items-center pt-1">
                <ItemCount item={item} />
            </span>
        </>
    )
}

export default ItemCard