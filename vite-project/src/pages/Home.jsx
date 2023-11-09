import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import Spinner from '../compponents/Spinner'


const Home = () => {
  const [enterprises, setEnterprises] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    axios
      .get('http://localhost:5555/enterprises')
      .then((response)=>{
        setEnterprises(response.data.data)
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
        setLoading(false)
      })
  }, []);
  return (
    <div className='P-4'>
      <div className='flex justify-between items-center'>
         <h1 className='text-3x1 my-8'>Enterprises list</h1>
         <Link to='/enterprises/create'>
          <MdOutlineAddBox className='text-sky-800 text-4x1'/>
         </Link>
      </div>
     {loading ? (
      <Spinner />
     ) : (
      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>Nombre</th>
            <th className='border border-slate-600 rounded-md'>Descripción</th>
          </tr>
        </thead>
        <tbody>
  {enterprises.map((enterprise, index) => (
    <tr key={enterprise._id} className='h-8'>
      <td className='border border-slate-700 rounded-md text-center'>
        {enterprise.name}
      </td>
      <td className='border border-slate-700 rounded-md text-center'>
        {enterprise.description}
      </td>
      <td className='border border-slate-700 rounded-md text-center'>
        <div className='flex justify-center gap-x-4'>
          <Link to={`/enterprises/details/${enterprise._id}`}>
            <BsInfoCircle className='text-2x1 text-green-800' />
          </Link>
          <Link to={`/enterprises/edit/${enterprise._id}`}>
            <AiOutlineEdit className='text-2x1 text-yellow-600' />
          </Link>
          <Link to={`/enterprises/delete/${enterprise._id}`}>
            <MdOutlineDelete className='text-2x1 text-red-600' />
          </Link>
        </div>
      </td>
    </tr>
  ))}
</tbody>
      </table>
     )}
    </div>
  )
}

export default Home
