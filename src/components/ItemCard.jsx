import { useEffect, useState } from "react"

function ItemCard({ item }) {
    const [added, setAdded] = useState(0)
    const [cartID, setCartID] = useState("")
    const URL = "http://localhost:5000/cart"
    const atMin = added <= 0
    const atMax = !item.stock.available || added >= item.stock.quantity

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => data.forEach(i => {
            if (i.itemID === item.id){
                setCartID(i.id)
            }
        }))
    }, [])



    useEffect(() => {
        if (cartID !== ''){
            fetch(URL + "/" + cartID)
            .then(res => res.json())
            .then(data => {
                setAdded(data.count)
            })
        } 
    }, [added, cartID])

    
    
    const handleCount = (op) => {
        if (op === "-"){
            if (added !== 0){ 
                setAdded(added - 1)

                if (added > 1){
                    fetch(URL + "/" + cartID, {
                        method: "PATCH",
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify({"count": added - 1})
                        }
                    ).then(res => res.json())
                } else {
                    fetch(URL + "/" + cartID, {
                        method: "DELETE"}
                    )
                    setCartID('')
                }
            }
        } else {
            if (item.stock.available && added < item.stock.quantity){
                setAdded(added + 1)

                if (added == 0){
                    fetch(URL, {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            itemID: item.id,
                            count: 1
                        })
                    })
                    .then(res => res.json())
                    .then(data => setCartID(data.id))
                } else {
                    fetch(URL + "/" + cartID, {
                        method: "PATCH",
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify({"count": added + 1})
                        }
                    ).then(res => res.json())
                }

            }
        }
    }


    return (
        <>
            <div className="az-card card d-flex flex-column">
                <img className="card-img-top az-image" src={item.imageURL}></img>
                <h1 className="az-card-title fw-bold mb-0">{item.name}</h1> 
                <p className="mb-0">${item.price.toFixed(2)}</p>
                <p className="mb-0">{item.description}</p>
                <p>Quantity: <span className="az-stock-qty">{item.stock.quantity}</span></p>
                {(item.stock.available) ? "" : (<p className="az-sold-out d-flex justify-content-center align-items-center mb-1">Sold Out!</p>)}
                <span className="mt-auto d-flex justify-content-center align-items-center pt-1">
                    <div className="az-counter-wrap">
                        <button onClick={() => handleCount("-")} className={atMin ? "az-counter-btn az-counter-btn-limit" : "az-counter-btn"}>-</button>
                        <p className="az-counter-value">{added}</p>
                        <button onClick={() => handleCount("+")} className={atMax ? "az-counter-btn az-counter-btn-limit" : "az-counter-btn"}>+</button>
                    </div>
                </span>
            </div>
        </>
    )
}

export default ItemCard