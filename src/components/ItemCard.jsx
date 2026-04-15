import { useEffect, useState } from "react"

function ItemCard({ item }) {
    const [added, setAdded] = useState(0)
    const [cartID, setCartID] = useState("")
    const URL = "http://localhost:5000/cart"
    const minusStyle = "cursor-pointer px-2 font-bold text-shadow-md text-xs text-[#EEE5E9] border border-[#92DCE5] bg-[#383D3B]" + ((added == 0) ? " hover:bg-[#e25050]" : "")
    const plusStyle = "cursor-pointer px-1.75 font-bold text-shadow-md text-xs text-[#EEE5E9] border border-[#92DCE5] bg-[#383D3B]" + ((added == item.stock.quantity) ? " hover:bg-[#e25050]" : "")

    useEffect(() => {
        console.log("word")
        fetch(URL)
        .then(res => res.json())
        .then(data => data.forEach(i => {
            console.log(i)
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
                    .then(data => console.log("hello"))
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
            <div className="shadow-sm shadow-[#52DEE5]/30 text-xs text-[#383D3B] border-2 rounded-lg border-[#92DCE5] bg-[#EEE5E9] hover:text-shadow-transparent p-1 m-3 flex h-full min-h-0 flex-col">
                <h1 className="font-bold">{item.name}</h1> 
                <h2>${item.price.toFixed(2)}</h2>
                <p className="text-[10px] text-[#4b5350]">{item.description}</p>
                <p className="text-black">Quantity: <span className="text-[#00789a] font-bold">{item.stock.quantity}</span></p>
                {(item.stock.available) ? "" : (<h2 className="flex justify-center items-center text-[#e25050]">Sold Out!</h2>)}
                <span className="mt-auto flex justify-center items-center pt-1">
                    <button onClick={() => handleCount("-")} className={minusStyle}>-</button>
                    <button className="px-2 font-bold text-shadow-md text-xs text-[#EEE5E9] border border-[#92DCE5] bg-[#383D3B]">{added}</button>
                    <button onClick={() => handleCount("+")} className={plusStyle}>+</button>
                </span>
            </div>
        </>
    )
}

export default ItemCard