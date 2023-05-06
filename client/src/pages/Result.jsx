import React, { useState, useEffect, useContext } from 'react'
import { test1, test2, test3, avatar } from '../assets'
import { Radio } from '@nextui-org/react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../components/context/useContext'

const Result = () => {
  const { setIsAuth, isAuth } = useContext(UserContext)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const logout = async (e) => {
    e.preventDefault()

    axios.get('/logout').then(({ data }) => {
      console.log(data.message)
      setIsAuth(false)
      console.log(isAuth)
      navigate('/')
    })
  }

  const { userData } = useContext(UserContext)

  const [value, setValue] = useState(userData)
  console.log(userData)

  return (
    <section className=' w-full overflow-hidden h-screen'>
      <div className='flex flex-col items-center justify-center w-full h-screen '>
        <div className='flex flex-col items-center bg-white border-2 rounded-md p-4 overflow-hidden w-4/5'>
          <div>
            <p className='text-4xl font-bold'>Your Result</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center p-4'>
              <p className='text-2xl font-bold'>Attention</p>
            </div>
            <div className='flex items-center p-4 ml-4'>
              <p className='text-2xl font-bold'>{userData.attentionScore}</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center p-4'>
              <p className='text-2xl font-bold'>Curiosity</p>
            </div>
            <div className='flex items-center p-4 ml-4'>
              <p className='text-2xl font-bold'>{userData.curiosityScore}</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center p-4'>
              <p className='text-2xl font-bold'>Empathy</p>
            </div>
            <div className='flex items-center p-4 ml-4'>
              <p className='text-2xl font-bold'>{userData.empathyScore}</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center p-4'>
              <p className='text-2xl font-bold'>WorkEthics</p>
            </div>
            <div className='flex items-center p-4 ml-4'>
              <p className='text-2xl font-bold'>{userData.workEthicScore}</p>
            </div>
          </div>

          <Link to='/'>
            <button onClick={logout}>
              <div className='flex items-center justify-center bg-green-700 p-3 border-2 rounded-md cursor-pointer w-[400px]'>
                <p className='font-bold text-5xl p-4 text-white'>Play Again</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
      {/* */}
    </section>
  )
}

export default Result
