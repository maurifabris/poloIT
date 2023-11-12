import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import EnterpriseModal from './EnterpriseModal';



const EnterpriseSingleCard = ({ enterprise }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <div
                key={enterprise._id}
                className='border-2  border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                    {enterprise.name}
                </h2>
                <h4 className='my-2 text-gray-500'>{enterprise._id}</h4>
                <div className='flex justify-start enterprises-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2x1' />
                    <h2 className='my-1'>{enterprise.description}</h2>
                </div>
                <BiShow
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/enterprises/details/${enterprise._id}`}>
                    <BsInfoCircle className='text-2x1 text-green-800 hover:text-black' />
                </Link>
            </div>
            {
                showModal && (
                    <EnterpriseModal enterprise={enterprise} onClose={() => setShowModal(false) }/>
                )
            }
        </div>
    )
}

export default EnterpriseSingleCard
