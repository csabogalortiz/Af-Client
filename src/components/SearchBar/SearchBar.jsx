import { useState } from 'react'
// import './SearchBar.css'

const SearchBar = ({ filterFeelings }) => {

    const [query, setQuery] = useState('')

    const handleSearch = event => {
        setQuery(event.target.value)
        filterFeelings(event.target.value)
    }

    return (
        <form className='SearchBar'>
            <div className="mb-3">
                <input onChange={handleSearch} type="text" class="form-control" id="search" placeholder="🔎" />
            </div>
        </form>
    )
}

export default SearchBar