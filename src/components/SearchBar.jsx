import { searchIcon, cartIcon, filterIcon } from '../assets/SVGs.jsx'
import { useState } from 'react'


function SearchBar({ setSearch, search }) {
    const [submission, setSubmission] = useState('')

    
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(submission)
        setSubmission('')
    }

    return (
        <>
            <div className="flex w-full max-w-full min-w-0 items-center justify-between gap-2 px-2 sm:px-4 py-2 bg-[#eee5e5]">
                <button type="button" onSubmit={handleSearch} className="shrink-0 p-1 cursor-pointer">{filterIcon}</button>
                <form onSubmit={handleSearch} className="flex min-w-0 flex-1 items-center text-[10px] text-[#222524] border-2 rounded-lg border-[#92DCE5] bg-[#7C7C7C] p-2 cursor-pointer max-w-xl mx-auto">
                    <input value={submission} onChange={(e) => setSubmission(e.target.value.toUpperCase())} placeholder="Enter Keyword(s)..." className="focus:outline-none focus:placeholder-transparent min-w-0 w-full max-w-none"></input>
                    <button type="submit" className="cursor-pointer shrink-0 rotate-y-180">{searchIcon}</button>
                </form>
                <button type="button" className="shrink-0 p-1 cursor-pointer">{cartIcon}</button>
            </div>
            <h1 className="flex center-items justify-center [-webkit-text-stroke:1px_#383D3B] pb-2 bg-[#EEE5E9] font-bold text-xl text-[#92DCE5]">A-Z Shopping</h1>
        </>
    )
}

export default SearchBar