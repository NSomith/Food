import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { MdFastfood, MdCloudUpload } from 'react-icons/md'
import { categories } from '../utils/data'
import Loader from './Loader'

const CreateContainer = () => {

  const [title, setTitle] = useState('')
  const [calories, setCalories] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(null)
  const [imageAsset, setImageAsset] = useState(null)
  const [fields, setFields] = useState(false)
  const [alertStatus, setAlertStatus] = useState('danger')
  const [msg, setMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4
      flex flex-col items-center justify-center gap-2
      '>
        {
          fields && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 rounded-lg text-center ${alertStatus === 'danger' ? "bg-red-400 text-black" : "bg-emerald-400 text-black"}`}>
              Something went Wrong
              {msg}
            </motion.p>
          )
        }

        <div className='w-full flex items-center border-b border-gray-500 py-2 gap-2'>
          <MdFastfood className='text-xl text-gray-700' />
          <input type="text"
            required value={title}
            placeholder='Give a title...............'
            onChange={(e) => setTitle(e.target.value)}
            className='w-full h-full text-lg font-semibold bg-transparent outline-none border-none placeholder:text-red-200 text-textColor' />
        </div>

        <div className='w-full'>
          <select onChange={(e) => setCategory(e.target.value)} className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'>
            <option value={"others"} className='bg-white'>
              Select categories
            </option>
            {categories && categories.map((item) => (
              <option
                key={item.id}
                className='text-base border-0 outline-none capitalize text-headingColor bg-white'
                value={item.urlParamName}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className='group flex justify-center items-center flex-col rounded-lg
        border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer
        '>
          {isLoading ? <Loader /> : <>
            {
              !imageAsset ?
                <>
                  <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <div className='w-full h-full flex flex-col items-center justify-center '>
                      <MdCloudUpload className='text-gray-400 text-3xl hover:text-gray-700' />
                      <p className='text-gray-400 text-3xl hover:text-gray-700'>Click here to upload img</p>

                    </div>

                  </label>
                </> : <></>
            }

          </>}
        </div>

      </div>

    </div>
  )
}

export default CreateContainer