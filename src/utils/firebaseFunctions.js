// save items in firebase

import { async } from "@firebase/util"
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"


export const saveItems = async (data) => {
    await setDoc(
        doc(firestore, "FoodItems", `${Date.now()}`), data, { merge: true }
    )
}

export const getAllfoodItems = async ()=>{
    const items = await getDocs(
        query(collection(firestore,"FoodItems"),orderBy("id","desc"))
    )

    return items.docs.map((doc)=>doc.data())
}