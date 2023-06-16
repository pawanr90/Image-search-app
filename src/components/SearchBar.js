function SearchBar({onSubmit}) {

    const handleFormSubmit = (event) => {
        // Prevents default form element behaviour
        event.preventDefault()
        // Need to send the parent some data
        onSubmit('cars')
    }

    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input />
        </form>
    </div>
    )
}

export default SearchBar