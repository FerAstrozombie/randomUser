import axios from "axios";

export const getUser = async () => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const response = await axios.get("https://randomuser.me/api/", {
        headers: headers
    }).then((res) => {
        return res
    }).catch((error) => {
        return error
    })
    return response
};

export const saveUser = async ( body ) => {

    const response = await axios.post("http://localhost:8080/random", {
        body
    }).then((res) => {
        return res
    }).catch((error) => {
        return error
    })
    return response
}

export const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/random")
    .then((res) => {
        return res.data.users
    }).catch((error) => {
        return error
    })
    return response
}