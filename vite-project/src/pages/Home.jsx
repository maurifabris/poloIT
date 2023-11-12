import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import Spinner from '../compponents/Spinner'
import EnterprisesCard from '../compponents/home/EnterprisesCard'
import EnterprisesTable from '../compponents/home/EnterprisesTable'



const Home = () => {
  const [enterprises, setEnterprises] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')



  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5555/enterprises')
      .then((response) => {
        setEnterprises(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, []);
  return (
    <div className='P-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>
          Cards
        </button>
      </div>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>
          Tabla
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3x1 my-8'>Empresas:</h1>
        <Link to='/enterprises/create'>
          <MdOutlineAddBox className='text-sky-800 text-4x1' />
        </Link>
      </div>
      {loading ?
        <Spinner />
        : showType === 'table' ? (<EnterprisesTable enterprises={enterprises}/>) : (
      <EnterprisesCard enterprises={enterprises} />)}
    </div>
  )
}

export default Home
