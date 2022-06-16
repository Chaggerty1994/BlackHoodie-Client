export const getProducts = () => {
    return fetch("http://localhost:8000/products")
        .then(response => response.json())
}



export const getProductById = (productId) => {
    return fetch(`http://localhost:8000/products/${productId}`)
    .then(res => res.json())
}

