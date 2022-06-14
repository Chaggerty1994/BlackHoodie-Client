export const getOrders = () => {
    return fetch("http://localhost:8000/orders", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}