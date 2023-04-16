import axios from "axios";

//we can also us js fetch api instead of axios
//gives u easy way of adding baseURL and it is widely used

const instance=axios.create({
    baseURL:"http://127.0.0.1:5001/challenge-63fd6/us-central1/api" //The API (cloud function) url
});

export default instance;