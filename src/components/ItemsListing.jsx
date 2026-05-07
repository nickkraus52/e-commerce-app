import ItemCard from './ItemCard'

function ItemsListing ({ items }) {
    return (
        <>
            <div className="container-fluid mb-4">
                <div className="row row-cols-6 align-items-stretch mx-0">
                    {items.map((item) => (
                        <div key={item.id} className="col px-2">
                            <div className="az-card card d-flex flex-column">
                                <ItemCard className="az-card card d-flex flex-column" item={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemsListing