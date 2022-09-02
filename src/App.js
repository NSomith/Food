import React, { useEffect } from 'react'
import { CreateContainer, Header, MainContainer } from './components'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllfoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'


const App = () => {

    const [{foodItems},dispatch] = useStateValue()


    const fetchData = async()=>{
        await getAllfoodItems().then((data)=>{
            console.log(data);
            dispatch({
                type:actionType.SET_FOOD_ITEMS,
                foodItems:data
            })
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <AnimatePresence exitBeforeEnter>
            <div className='w-screen h-auto flex flex-auto bg-primary'>
                <Header />
                <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
                    <Routes>
                        <Route path='/*' element={<MainContainer />}></Route>
                        <Route path='/createitem' element={<CreateContainer />}></Route>
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    )
}

export default App