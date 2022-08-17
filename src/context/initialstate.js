// it first check the local storgae and see if there is a user or not if there is a user
// use it otherwise set it to null

import { fetchUser } from "../utils/fetchLocalStroageData"

const userinfo = fetchUser()

export const initialstate = {
    user:userinfo  
}