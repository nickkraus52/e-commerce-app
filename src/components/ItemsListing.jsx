import ItemCard from './ItemCard'

function ItemsListing ({ items }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-6 align-items-stretch mx-0">
                    {items.map((item) => (
                        <div key={item.id} className="col px-2">
                            <ItemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemsListing