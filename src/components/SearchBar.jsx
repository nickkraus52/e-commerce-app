
function SearchBar({ setSearch }) {
    const searchIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>)
    
    const cartIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
      )

    const filterIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
      )
  

    return (
        <>
            <div className="flex w-full max-w-full min-w-0 items-center justify-between gap-2 px-2 sm:px-4 py-2 bg-[#EEE5E9]">
                <button type="button" className="shrink-0 p-1 cursor-pointer">{filterIcon}</button>
                <form className="flex min-w-0 flex-1 items-center text-[10px] text-[#222524] border-2 rounded-lg border-[#92DCE5] bg-[#7C7C7C] p-2 cursor-pointer max-w-xl mx-auto">
                    <input placeholder="Enter Keyword(s)..." className="focus:outline-none focus:placeholder-transparent min-w-0 w-full max-w-none"></input>
                    <button type="submit" className="cursor-pointer shrink-0 rotate-y-180">{searchIcon}</button>
                </form>
                <button type="button" className="shrink-0 p-1 cursor-pointer">{cartIcon}</button>
            </div>
        </>
    )
}

export default SearchBar