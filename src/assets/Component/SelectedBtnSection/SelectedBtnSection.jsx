import React from 'react';

const SelectedBtnSection = () => {
    return (
        <div className='container mx-auto flex flex-col items-center py-8 space-y-4'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p className='text-gray-400'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity</p>
            <div className="">
                <button className='btn rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
                    Products
                </button>
                <button className='btn  rounded-2xl text-indigo-600'>
                    Cart (2)
                </button>
            </div>
        </div>
    );
};

export default SelectedBtnSection;