export const getProducts = () => {
    return fetch("http://localhost:8000/products", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

console.log(getProducts)