export const getProducts = () => {
    return fetch("http://localhost:8000/products", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}



export const getProductById = (productId) => {
    return fetch(`http://localhost:8000/products/${productId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(res => res.json())
}

