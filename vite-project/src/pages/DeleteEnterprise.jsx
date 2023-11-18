import React, { useState } from 'react';
import Spinner from '../compponents/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButtons from '../compponents/BackButtons';

const DeleteEnterprise = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const hanldeDelete = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/enterprises/${id}`)
      .then(() => {
        setLoading(false)
        navigate("/")
      }).catch((error) => {
        setLoading(false)
        alert('Error al eliminar empresa')
        console.log(error)
      })
  }


  return (
    <div className='p-4'>
      <BackButtons />
      <h1 className='text-3xl my-4'>Eliminar empresa</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>¿Seguro que quiere eliminar esta empresa?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={hanldeDelete}
        >
          Si, eliminar
        </button>
      </div>
    </div>
  )
}

export default DeleteEnterprise
