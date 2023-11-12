import React, { useState } from 'react'
import BackButton from '../compponents/BackButtons'
import Spinner from '../compponents/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 




const CreateEnterprise = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSaveEnterprise = () =>{
    const data = {
      name,
      description
    }
    setLoading(true)
    axios
      .post('http://localhost:5555/enterprises', data)
      .then(()=>{
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert("Error al crear la empresa")
        console.log(error)
      })

  }


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Crear empresa</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Nombre de la empresa</label>
          <input type="text"
          value = {name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
      </div>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Descripción de la empresa</label>
          <input type="text"
          value = {description}
          onChange={(e) => setDescription(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveEnterprise}>
        Guardar empresa
      </button>
    </div>
  )
}

export default CreateEnterprise
