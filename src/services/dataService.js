export async function getUser() {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))

    const requestOption = {
        method: "GET",
        headers: {
          "Content-type": "application/json", 
          'Authorization': `Bearer ${token}`  
        }}
    

    const response = await fetch(`http://localhost:3000/600/users/${cbid}`, requestOption  );

    const data = await response.json();
    return data
    
}

export async function getUserOrders() {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))
    const response = await fetch(`http://localhost:3000/660/orders?user.id=${cbid}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json", 
          'Authorization': `Bearer ${token}`  
        }
      })
      const data = await response.json();
      return data;
    
}

export async function createOrder(cartList, total, user) {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))


    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    
    const response = await fetch("http://localhost:3000/660/orders",{
    method:"POST",
    headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
    body: JSON.stringify(order)
    })
    const data = await response.json()
    return data;
    
}
