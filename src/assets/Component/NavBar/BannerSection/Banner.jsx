import React from 'react';
import BannerImg from "../../../products/banner.png";

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 container mx-auto px-4 my-12'>

            {/* Text */}
            <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
                <p className='inline-block px-3 py-1 rounded-2xl text-purple-600 bg-gray-200 text-sm'>
                    New: AI-Powered Tools Available
                </p>

                <h1 className='font-bold text-3xl md:text-5xl'>
                    Supercharge Your Digital Workflow
                </h1>

                <p className='text-gray-600'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className="flex justify-center md:justify-start gap-3">
                    <button className='btn rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
                        Get Started
                    </button>
                    <button className='btn btn-outline rounded-2xl text-indigo-600'>
                        Explore
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={BannerImg}
                    alt=""
                    className='w-full max-w-md shadow-lg rounded-lg'
                />
            </div>

        </div>
    );
};

export default Banner;