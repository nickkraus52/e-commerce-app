import { useEffect, useState } from 'react'
import ItemCount from './ItemCount.jsx'

function ShoppingCart(){
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const URL = "http://localhost:5000/cart"

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    const clearCart = async () => {
        await items.forEach((cartItem) => fetch(`${URL}/${cartItem.id}`, { method: "DELETE" }))

        setItems([])
    }

    return (
        <>
            <a href='/dashboard' className='az-link d-flex justify-content-center p-1'>
                    Return to Dashboard
            </a>
            <h2 className="d-flex justify-content-center pb-1 az-cart-title">
                Shopping Cart
            </h2>

            {items.length !== 0 ? (
            <div className="d-flex justify-content-center pb-2">
                <button className="az-clear-btn"  onClick={clearCart}>Clear Cart </button>
            </div>)  : ""}

            <div className="d-flex justify-content-center">                
                <div id="accordionID" className='accordion accordion-flush' style={{ width: '800px' }}>
                    {items.map((item) => (
                        
                        <div key={item.id} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed d-flex" data-bs-toggle="collapse" data-bs-target={"#collapse" + item.id}>
                                    {item.item.name}
                                </button>
                            </h2>
                            <div id={"collapse" + item.id} className="accordion-collapse collapse" data-bs-parent="#accordionID"> 
                                <div className="accordion-body"> 
                                    <div>   
                                        <img className="az-cart-image" src={item.item.imageURL}></img>
                                        <div className="az-cart-description">
                                            {item.item.description}
                                        </div>
                                        <div>
                                            ${item.item.price.toFixed(2)}
                                        </div>
                                        <ItemCount item={item.item} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center p-2">
                {items.length !== 0 ? (<button className="az-clear-btn"  onClick={clearCart}>Check Out</button>) : "Add Some Items to your Cart!"}
            </div>
        </>
    )
}

export default ShoppingCart