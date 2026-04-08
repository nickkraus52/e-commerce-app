import ItemCard from './ItemCard'

function ItemsListing ({ items }) {
    return (
        <>
            <div className="grid grid-cols-4">
                {items.map((item, index) => (
                    <ItemCard item={item} />
                ))}
            </div>
        </>
    )
}

export default ItemsListing