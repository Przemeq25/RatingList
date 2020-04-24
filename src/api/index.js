import axios from 'axios';
const url = 'http://tomaszgadek.com/api/students'

export const fetchData = async () => {
    try{
        const{data} = await axios.get(url);
        return data;
    }catch{

    }
}

export const fetchUserData = async (albumNumber) =>{
    try{
        const {data:{labs}} = await axios.get(`${url}/${albumNumber} `);
        return labs;
    }catch{

    }
}
