import ItemCard from './ItemCard'

function ItemsListing ({ items, setCart, cart }) {
    return (
        <>
            <div className="grid grid-cols-4 gap-y-3 items-stretch">
                {items.map((item, index) => (
                    <ItemCard key={item.id} item={item} setCart={setCart} cart={cart}/>
                ))}
            </div>
        </>
    )
}

export default ItemsListing