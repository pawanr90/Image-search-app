import axios from "axios";

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Vxa8pAiV3cbnaqFVK5vvTId2399rUyBb-NTNGS9czxQ'
        },
        params: {
            query: term
        }
    })
    return response.data.results;
}

export default searchImages