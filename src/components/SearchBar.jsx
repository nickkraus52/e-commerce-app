import { useState } from 'react'
import { Link } from 'react-router-dom'


function SearchBar({ setSearch, search }) {
    const [submission, setSubmission] = useState('')

    
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(submission)
        setSubmission('')
    }

    return (
        <>
            <div className="az-search-bar d-flex align-items-center justify-content-between gap-2 px-2">
                <h1 className="az-title flex-shrink-0 mb-0">A-Z Shopping</h1>
                <form onSubmit={handleSearch} className="az-search-form d-flex flex-grow-1 align-items-center px-2">
                    <input value={submission} onChange={(e) => setSubmission(e.target.value)} placeholder="Enter Search" className="az-search-input flex-grow-1 w-100"></input>
                    <button type="submit" className="flex-shrink-0 btn p-0 az-sb-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.01 1.01 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" /></svg>
                    </button>
                </form>
                    <a className="flex-shrink-0 btn az-sb-icon" href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" /></svg>
                    </a>
            </div>
        </>
    )
}

export default SearchBar