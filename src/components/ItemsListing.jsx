import ItemCard from './ItemCard'

function ItemsListing ({ items }) {
    return (
        <>
            <div className="grid grid-cols-3 gap-y-3 pb-15 items-stretch">
                {items.map((item, index) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default ItemsListing