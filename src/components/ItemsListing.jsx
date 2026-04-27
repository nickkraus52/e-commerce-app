import ItemCard from './ItemCard'

function ItemsListing ({ items }) {
    return (
        <>
            <div className="container-fluid px-3">
                <div className="az-items-grid row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 align-items-stretch mx-0">
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