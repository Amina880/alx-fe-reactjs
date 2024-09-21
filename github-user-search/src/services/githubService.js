import axios from "axios"


const url = 'https://api.github.com/search/users?q=';



const fetchUserData = async ({ username, location, minRepos}) => {
  
    let query = `${username}`;
    if (location){
        query+= `+location:${location}`
    }
    if (minRepos){
        query+= `+repos:>${minRepos}`
    }

    try {
        const response = await axios.get(`${url}${query}`);
        return response.data;
    } 
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}
export default fetchUserData;
