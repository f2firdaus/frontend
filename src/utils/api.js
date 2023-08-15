import axios from 'axios';


export const makePaymentrequest = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization: "bearer " +process.env.REACT_APP_STRIPE_APP_KEY,
    }
})

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};
const fetchDataFromApi = async (url) => {
    try {
        const { data }  = await axios.get(process.env.REACT_APP_DEV_URL + url, params
        );
        // console.log(data)
        return data;
        
    } catch (error) {
        console.log(error)
        return error;
    }
}


export default fetchDataFromApi;