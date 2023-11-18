import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {  MdOutlineDelete } from 'react-icons/md';


//table for filter  values of enterprises
const EnterprisesTable = ({ enterprises }) => {
  const [filters, setFilters] = useState({
    name: '',
    description: '',
    support: '',
    dev: '',
    scope: '',
    employees: ''
  });
// filters for the enterprises values
  const filteredEnterprises = enterprises.filter((enterprise) => {
    return (
      (enterprise.name && enterprise.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1) &&
      (enterprise.description && enterprise.description.toLowerCase().indexOf(filters.description.toLowerCase()) !== -1) &&
      (enterprise.support && enterprise.support.toLowerCase().indexOf(filters.support.toLowerCase()) !== -1) &&
      (enterprise.dev && enterprise.dev.toLowerCase().indexOf(filters.dev.toLowerCase()) !== -1) &&
      (enterprise.scope && enterprise.scope.toLowerCase().indexOf(filters.scope.toLowerCase()) !== -1) &&
      (enterprise.employees && enterprise.employees.toLowerCase().indexOf(filters.employees.toLowerCase()) !== -1)
    );
  });
  
  

  const handleFilterChange = (property, value) => {
    setFilters({ ...filters, [property]: value });
  };

  return (
    <div>
      {/* Inputs to filter enterprises */}
  <div className="flex flex-wrap gap-4 mb-4">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
    <input
      type="text"
      placeholder="Filtrar por nombre"
      value={filters.name}
      onChange={(e) => handleFilterChange('name', e.target.value)}
      className="p-2 border border-blue-500 rounded-md placeholder-blue-500 w-full"
    />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
    <input
      type="text"
      placeholder="Filtrar por soporte"
      value={filters.support}
      onChange={(e) => handleFilterChange('support', e.target.value)}
      className="p-2 border border-blue-500 rounded-md placeholder-blue-500 w-full"
    />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
    <input
      type="text"
      placeholder="Filtrar por desarrollo"
      value={filters.dev}
      onChange={(e) => handleFilterChange('dev', e.target.value)}
      className="p-2 border border-blue-500 rounded-md placeholder-blue-500 w-full"
    />
  </div>
  <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
    <label className="block text-sm font-medium text-gray-700"></label>
    <select
      value={filters.scope}
      onChange={(e) => handleFilterChange('scope', e.target.value)}
      className="p-2 border border-blue-500 rounded-md placeholder-blue-500 w-full"
    >
      <option value="">Región</option>
      <option value="AMBA">AMBA</option>
      <option value="Interior Arg">Interior Arg</option>
      <option value="Países limítrofes">Países limítrofes</option>
      <option value="Latam">Latam</option>
      <option value="USA">USA</option>
    </select>
  </div>
  <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
    <label className="block text-sm font-medium text-gray-700"></label>
    <select
      value={filters.employees}
      onChange={(e) => handleFilterChange('employees', e.target.value)}
      className="p-2 border border-blue-500 rounded-md placeholder-blue-500 w-full"
    >
      <option value="">N° de empleados</option>
      <option value="1-20">1-20</option>
      <option value="20-50">20-50</option>
      <option value="100-250">100-250</option>
      <option value="Mas de 250">Más de 250</option>
    </select>
  </div>
</div>


{/* Enterprieses */}


      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>Nombre</th>
            <th className='border border-slate-600 rounded-md'>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnterprises.map((enterprise, index) => (
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
                    <BsInfoCircle className='text-2xl text-green-800' />
                  </Link>
                  <Link to={`/enterprises/edit/${enterprise._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                  </Link>
                  <Link to={`/enterprises/delete/${enterprise._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnterprisesTable;
