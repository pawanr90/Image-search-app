import './SearchBar.css'
import { useState } from "react"

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('')
    
    const handleFormSubmit = (event) => {
        // Prevents default form element behaviour
        event.preventDefault()
        
        // Need to send the parent some data
        onSubmit(term)
    }

    // Function to handle the chagning input using React state
    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
    <div className='search-bar' >
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    )
}

export default SearchBar