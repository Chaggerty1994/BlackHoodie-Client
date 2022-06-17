export const getOrders = () => {
    return fetch("http://localhost:8000/orders", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getUserPayments = () => {
    return fetch("http://localhost:8000/userpayments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}



export const getUserById = (userId) => {
    return fetch(`http://localhost:8000/users/${userId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(res => res.json())
}

export const createOrder = (order) => {
    return fetch("http://localhost:8000/orders/complete", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(order) 
    })
    .then(response => response.json())
}

export const createPaymentType = (payment) => {
    return fetch("http://localhost:8000/userpayments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(payment) 
    })
    .then(response => response.json())
}