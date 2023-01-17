import axios from 'axios';

export const getPersons = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users');
        return response.data;
        
    } catch (error) {
        throw error;
    }

    
}

export const getPersonDetails = async (id) => {
    try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        return response.data.data;
        
    } catch (error) {
        throw error;
    }

}

export const login = async (username, password) => {
    const loginData = {
        username: username,
        password: password,
    };
    
    const response = await axios.post('https://dummyjson.com/auth/login', loginData, {
        headers: { 'Content-Type': 'application/json' },
    })

    return response.data

}

