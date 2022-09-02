import { motion } from 'framer-motion'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import { categories } from '../utils/data'
import Loader from './Loader'
import { storage } from '../firebase.config'

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

  const upladimage = (e) => {
    setIsLoading(true)
    const imgfile = e.target.files[0]
    // console.log(imgfile);
    const storageref = ref(storage, `Images/${Date.now()} - ${imgfile.name}`)
    const uploadtask = uploadBytesResumable(storageref, imgfile)

    uploadtask.on('state_changed', (snapshot) => {
      const uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, (err) => {
      console.log(err);
      setFields(true)
      setMsg("Error while uploading")
      setAlertStatus("danger")
      setTimeout(() => {
        setFields(false)
        setIsLoading(false)
      }, 4000)
    }, () => {
      getDownloadURL(uploadtask.snapshot.ref).then((downloadurl) => {
        setImageAsset(downloadurl)
        setIsLoading(false)
        setFields(true)
        setMsg('Uploaded sucessefuly')
        setAlertStatus('success')
        setTimeout(() => {
          setFields(false)
        }, 4000)
      })
    })
  }

  const deleteimage = () => {
    setIsLoading(true)
    const deleteref = ref(storage, imageAsset)
    deleteObject(deleteref).then(() => {
      setImageAsset(null)
      setIsLoading(false)
      setFields(true)
      setMsg('Deleted sucessefuly')
      setAlertStatus('success')
      setTimeout(() => {
        setFields(false)
      }, 4000)
    })
  }

  const savedetails = () => {

  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
      <div className='w-[90%] mt-1 md:w-[75%] border border-gray-300 rounded-lg p-4
      flex flex-col items-center justify-center gap-2
      '>
        {
          fields && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 rounded-lg text-center ${alertStatus === 'danger' ? "bg-red-400 text-black" : "bg-emerald-400 text-black"}`}>
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

        <div className='w-full  '>
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

                    <input
                      type="file"
                      name='uploadimage'
                      accept='image/*'
                      onChange={upladimage}
                      className='w-0 h-0 '
                    />

                  </label>
                </>
                :
                <>
                  <div className='relative h-full '>
                    <img src={imageAsset} alt="uploaded image" className='w-full h-full object-cover' />
                    <button
                      className='absolute bottom-3 
                      right-3 p-3 rounded-full 
                      text-xl 
                      bg-red-500
                      cursor-pointer outline-none 
                      hover:shadow-md duration-100 ease-in-out transition-all
                      '
                      onClick={deleteimage}
                    >
                      <MdDelete className='text-white' />
                    </button>
                  </div>
                </>
            }

          </>}
        </div>

        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdFoodBank className='text-gray-700 text-2xl' />
            <input
              type="text"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder='Calories'
              required className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400' />
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdAttachMoney className='text-gray-700 text-2xl' />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Price'
              required className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400' />
          </div>
        </div>

        <div className='flex items-center w-full'>
          <button
            type='button'
            onClick={savedetails}
            className='ml-0 md:ml-auto  w-full md:w-auto border-none outline-none bg-emerald-300 px-12 py-2 rounded-lg text-lg text-white font-semibold'
          >
            Save
          </button>
        </div>

      </div>

    </div>
  )
}

export default CreateContainer