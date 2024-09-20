import axios from "axios"


const url = 'https://api.github.com/users/';


const fetchUserData = async (username) => {
    
    try {
        const response = await axios.get(`${url}${username}`);
        return response.data;
    } 
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}
export default fetchUserData;