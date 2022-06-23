export const getProducts = () => {
    return fetch("http://localhost:8000/products")
        .then(response => response.json())
}

export const changeProduct = (productObject) => {
    fetch(`http://localhost:8000/products/${productObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(productObject)
    })
        
}

export const getCategories = () => {
    return fetch("http://localhost:8000/categories")
        .then(response => response.json())
}

export const getSizes = () => {
    return fetch("http://localhost:8000/sizes")
        .then(response => response.json())
}

export const getFilteredProducts = (catId) => {
    return fetch(`http://localhost:8000/products?category=${catId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}


export const getProductById = (productId) => {
    return fetch(`http://localhost:8000/products/${productId}`)
        .then(res => res.json())
}

