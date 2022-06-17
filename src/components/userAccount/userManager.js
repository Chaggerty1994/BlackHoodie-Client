export const getUsers = () => {
    return fetch("http://localhost:8000/users", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getCurrentUser = () => {
    return fetch("http://localhost:8000/users/current", {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}