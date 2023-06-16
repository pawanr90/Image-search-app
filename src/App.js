import SearchBar from "./components/SearchBar"

function App() {

    const handleSubmit = (term) => {
        //Search for images with the value 'term'
        console.log('Do a search with', term)
    }

    return <SearchBar onSubmit={handleSubmit} />
}

export default App