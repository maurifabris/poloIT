import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import EnterpriseSingleCard from './EnterpriseSingleCard';


const EnterprisesCard = ( {enterprises} ) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      { enterprises.map(( item ) => (
        <EnterpriseSingleCard key={ item._id } enterprise={ item } />
      ))}
    </div>
  )
}

export default EnterprisesCard
