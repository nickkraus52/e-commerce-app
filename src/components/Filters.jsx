function Filters({ category, search, setCategory, setSearch}){
    const filterStyle = "text-[11px] text-[#EEE5E9] text-shadow-sm border-1 font-bold border-[#EEE5E9] bg-[#9a9a9a] p-1 mx-1 rounded-md"
    const xStyle = "align-[-0.3px] text-shadow-md cursor-pointer text-[#81221f] hover:text-[#383D3B] hover:text-shadow-transparent"    

    return (  
        <>
            <div className="flex justify-center mx-3 pt-4 text-shadow-lg">

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