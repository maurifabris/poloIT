import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const EnterpriseModal = ({ enterprise, onClose }) => {
    return (
        <div
            className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <div className='border-2  border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                    <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                        {enterprise.name}
                    </h2>
                    <h4 className='my-2 text-gray-500'>{enterprise._id}</h4>
                    <div className='flex justify-start enterprises-center gap-x-2'>
                        <PiBookOpenTextLight className='text-red-300 text-2x1' />
                        <h2 className='my-1'>{enterprise.description}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterpriseModal;
