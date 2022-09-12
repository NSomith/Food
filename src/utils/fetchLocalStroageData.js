
export const fetchUser =()=>{
    const userinfo = localStorage.getItem('user') !== "undefined"
        ? JSON.parse(localStorage.getItem('user')) 
        : localStorage.clear()
    
        return userinfo
}

export const fetchcart =()=>{
    const cartitems = localStorage.getItem('cartitems') !== "undefined"
        ? JSON.parse(localStorage.getItem('cartitems')) 
        : localStorage.clear()
    
        return cartitems
}