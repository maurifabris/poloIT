import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'
import Spinner from '../compponents/Spinner'
import EnterprisesCard from '../compponents/home/EnterprisesCard'
import EnterprisesTable from '../compponents/home/EnterprisesTable'



const Home = () => {
  const [enterprises, setEnterprises] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')


// conect to backend port 
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
      <div className='flex justify-between items-center'>
  <h1 className='text-4xl font-semibold my-8 text-sky-800'>
    Estas empresas forman parte del polo:
  </h1>
  <Link to='/enterprises/create' className='text-sky-800 hover:text-sky-600'>
    <MdOutlineAddBox className='text-5xl cursor-pointer' title="Agregar Nueva Empresa" />
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
