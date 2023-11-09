import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../compponents/BackButtons'
import Spinner from '../compponents/Spinner'


const ShowEnterprises = () => {
  const [enterprise, setEnterprise] = useState({})
  const [loading, setLoading] = useState(false);
  const { id } = useParams()
  

  
  useEffect(()=>{
    setLoading(true)
    axios
      .get(`http://localhost:5555/enterprises/${id}`)
      .then((response) => {
        console.log(response.data)
        console.log(response.name)
        setEnterprise(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Empresa:</h1>
      {loading ? (
        <Spinner/>
      ): (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Nombre</span>
            <span>{enterprise.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Descripción</span>
            <span>{enterprise.data}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowEnterprises