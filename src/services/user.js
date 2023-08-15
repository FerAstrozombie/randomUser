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

    const response = await axios.post("https://backrandonuser-tmws-dev.fl0.io/random", {
        body
    }).then((res) => {
        return res
    }).catch((error) => {
        return error
    })
    return response
}

export const getUsers = async () => {
    const response = await axios.get("https://backrandonuser-tmws-dev.fl0.io/random")
    .then((res) => {
        return res.data.users
    }).catch((error) => {
        return error
    })
    return response
}