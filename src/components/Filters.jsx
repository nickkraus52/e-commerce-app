function Filters({ category, search, setCategory, setSearch}){
    const filterStyle = "az-filter-item az-text-shadow-sm"
    const xStyle = "az-filter-x"

    return (  
        <>
            <div className="d-flex justify-content-center mx-3 pt-4 az-text-shadow-lg">

                {(category !== "") ? (
                    <span className={filterStyle}>
                        <button className={xStyle} onClick={() => setCategory("")}> X </button> Category: {category}
                    </span>) 
                : null}

                {(search !== "") ? (
                    <span className={filterStyle}>
                        <button className={xStyle} onClick={() => setSearch("")}> X </button> Search: {search} 
                    </span>) 
                : null}              
            </div>
        </>
    )
}

export default Filters