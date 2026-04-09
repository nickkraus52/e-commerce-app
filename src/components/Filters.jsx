function Filters({ category, search, setCategory, setSearch}){
    const filterStyle = "text-[11px] text-[#EEE5E9] text-shadow-sm border-1 border-[#EEE5E9] bg-[#9a9a9a] p-1 rounded-md"
    const xStyle = "align-[-0.3px] text-shadow-md text-shadow-[#b9ec4b]/30 cursor-pointer text-[#b9ec4b] hover:text-[#383D3B] hover:text-shadow-transparent"    

    return (  
        <>
            <div className="flex justify-center py-1 pt-4 text-shadow-lg">
                {(category !== "") ? (<span className={filterStyle}><button className={xStyle} onClick={() => setCategory("")}>X</button> Category: {category}</span>) : null}
                {(search !== "") ? (<span className={filterStyle}>Keyword: {search} <button className={xStyle} onClick={() => setSearch("")}>X</button></span>) : null}
            </div>
        </>
    )
}

export default Filters