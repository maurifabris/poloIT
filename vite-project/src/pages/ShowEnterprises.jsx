import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButtons from '../compponents/BackButtons';
import Spinner from '../compponents/Spinner'

const ShowEnterprises = () => {
  const [enterprise, setEnterprise] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/enterprises/${id}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.enterprise.name);
        setEnterprise(response.data.enterprise);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
       <BackButtons />
      <h1 className='text-3xl my-4'>Empresa:</h1>
      {loading ? (
       <Spinner /> 
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Nombre:</span>
            <span>{enterprise.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Descripción:</span>
            <span>{enterprise.description}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Soporte:</span>
            <span>{enterprise.support}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Desarrollo:</span>
            <span>{enterprise.dev}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Ámbito:</span>
            <span>{enterprise.scope}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>N° de empleados:</span>
            <span>{enterprise.employees}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowEnterprises;
