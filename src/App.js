import React from 'react'
import { CreateContainer, Header, MainContainer } from './components'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


const App = () => {
    return (
        <AnimatePresence>
            <div className='w-screen h-auto flex flex-auto bg-primary'>
                <Header />
                <main className='mt-24 p-8 w-full'>
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