import { useEffect, useState } from 'react'

export default function ItemCount({ item }){
    const [added, setAdded] = useState(0)
    const [cartID, setCartID] = useState("")
    const URL = "http://localhost:5000/cart"
    const atMin = added <= 0
    const atMax = !item.stock.available || added >= item.stock.quantity
    const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>

    useEffect(() => {
        if (cartID !== ''){
            fetch(URL + "/" + cartID)
            .then(res => res.json())
            .then(data => {
                setAdded(data.count)
            })
        } 
    }, [added, cartID])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => data.forEach(i => {
            if (i.itemID === item.id){
                setCartID(i.id)
            }
        }))
    }, [])

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
                            count: 1, 
                            item, item
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
            <div className="az-counter-wrap">
                <button onClick={() => handleCount("-")} className={atMin ? "az-counter-btn az-counter-btn-limit" : "az-counter-btn"}>{added == 1 ? (trashIcon) : "-"}</button>
                <p className="az-counter-value">{added}</p>
                <button onClick={() => handleCount("+")} className={atMax ? "az-counter-btn az-counter-btn-limit" : "az-counter-btn"}>+</button>
            </div>
        </>
    )
}