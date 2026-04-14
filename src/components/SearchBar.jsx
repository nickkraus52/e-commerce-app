import { searchIcon, cartIcon, filterIcon } from '../assets/SVGs.jsx'


function SearchBar({ setSearch, search }) {
    return (
        <>
            <div className="flex w-full max-w-full min-w-0 items-center justify-between gap-2 px-2 sm:px-4 py-2 bg-[#EEE5E9]">
                <button type="button" className="shrink-0 p-1 cursor-pointer">{filterIcon}</button>
                <form onSubmit={(e) => setSearch(e.target.value)} className="flex min-w-0 flex-1 items-center text-[10px] text-[#222524] border-2 rounded-lg border-[#92DCE5] bg-[#7C7C7C] p-2 cursor-pointer max-w-xl mx-auto">
                    <input onSubmit={(e) => setSearch(e.target.value)} placeholder="Enter Keyword(s)..." className="focus:outline-none focus:placeholder-transparent min-w-0 w-full max-w-none"></input>
                    <button type="submit" className="cursor-pointer shrink-0 rotate-y-180">{searchIcon}</button>
                </form>
                <button type="button" className="shrink-0 p-1 cursor-pointer">{cartIcon}</button>
            </div>
        </>
    )
}

export default SearchBar