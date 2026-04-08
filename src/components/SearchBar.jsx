
function SearchBar({ setSearch }) {
    const searchIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>)
  

    return (
        <>
            <div className="flex justify-center items-center bg-[#EEE5E9]">
                <form className="flex items-center text-[10px] text-[#222524] border-2 rounded-lg border-[#92DCE5] bg-[#7C7C7C] p-2 mx-0.5 cursor-pointer">
                    <input placeholder="Enter Keyword(s)..." className="focus:outline-none focus:placeholder-transparent"></input>
                    <button type="submit" className="cursor-pointer rotate-y-180">{searchIcon}</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar