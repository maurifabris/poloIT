import React, { useState } from 'react';
import BackButtons from '../compponents/BackButtons';
import Spinner from '../compponents/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SendEmail = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendEmail = () => {
    const data = {
      to,
      subject,
      html,
    };

    setLoading(true);
    axios
      .post('http://localhost:5555/sendEmail', data) 
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error al enviar el correo electrónico');
        console.error(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButtons />
      <h1 className='text-3xl my-4'>Enviar Correo Electrónico</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Por favor introduzca el email de la empresa que desea contactar.</label>
          <input
            type='text'
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
      </div>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Asunto</label>
          <input
            type='text'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
      </div>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Contenido:</label>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full h-32'
          />
        </div>
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSendEmail}>
        Enviar Correo
      </button>
    </div>
  );
};

export default SendEmail;
