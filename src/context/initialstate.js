// it first check the local storgae and see if there is a user or not if there is a user
// use it otherwise set it to null

import { cartitems, fetchcart, fetchUser } from "../utils/fetchLocalStroageData"

const userinfo = fetchUser()
const cartInfo = fetchcart()

export const initialstate = {
    user:userinfo,
    foodItems: null,
    cartShow:false,
    cartItems:cartInfo
}