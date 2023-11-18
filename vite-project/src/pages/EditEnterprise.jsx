import React, { useEffect, useState } from 'react';
import BackButtons from '../compponents/BackButtons'
import Spinner from '../compponents/Spinner'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


// set values to create enterprises
const EditEnterprise = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [support, setSupport] = useState('');
  const [dev, setDev] = useState('');
  const [scope, setScope] = useState('');
  const [employees, setEmployees] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/enterprises/${id}`)
      .then((response) => {
        setName(response.data.name)
        setDescription(response.data.description)
        setSupport(response.data.support)
        setDev(response.data.dev)
        setScope(response.data.scope)
        setEmployees(response.data.employees)
        setLoading(false)
      }).catch((error) => {
        setLoading(false)
        alert('Error')
        console.log(error)
      })
  }, [])


  // handle edit for save button
  const handleEditEnterprise = () => {
    const data = {
      name,
      description,
      support,
      dev,
      scope,
      employees,
    };

    setLoading(true);
    // axios connection to backend
    axios
      .put(`http://localhost:5555/enterprises/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error al editar la empresa');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButtons />
      <h1 className='text-3x1 my-4'>Editar empresa</h1>
      {loading ? <Spinner /> : ''}
      {/* form to input data of enterprises */}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Nombre de la empresa</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Descripción de la empresa</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Soporte</label>
          <input
            type='text'
            value={support}
            onChange={(e) => setSupport(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Desarrollo</label>
          <input
            type='text'
            value={dev}
            onChange={(e) => setDev(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Ambito</label>
          <input
            type='text'
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>N° de empleados</label>
          <select
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2'
          >
            <option value={"1-20"}>1-20</option>
            <option value={"20-50"}>20-50</option>
            <option value={"100-250"}>100-250</option>
            <option value={"Mas de 250"}>Mas de 250</option>
          </select>
        </div>

      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleEditEnterprise}>
        Editar empresa
      </button>
    </div>
  );
};

export default EditEnterprise;
