function Filters({ category, search, setCategory, setSearch}){
    const filterStyle = "text-sm text-[#EEE5E9] text-shadow-sm border-1 border-[#EEE5E9] bg-[#7C7C7C] p-1 rounded-md"
    const xStyle = "align-[-0.5px] cursor-pointer text-[#92DCE5] hover:text-[#383D3B]"    

    return (  
        <>
            <div className="flex justify-center py-2 text-shadow-lg">
                {(category !== "") ? (<span className={filterStyle}>Category: {category} <button className={xStyle} onClick={() => setCategory("")}>X</button></span>) : null}
                {(search !== "") ? (<span className={filterStyle}>Keyword: {search} <button className={xStyle} onClick={() => setSearch("")}>X</button></span>) : null}
            </div>
        </>
    )
}

export default Filters