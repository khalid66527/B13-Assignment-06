import React from 'react';
import BannerImg from "../../../products/banner.png";
import Btn from "../../../products/Play.png";

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 container mx-auto p-10'>

            <div className=" justify-center pt-20 pl-10 space-y-3 ">
                <div className='flex-none inline-block p-1 px-5 rounded-full bg-gray-200 text-purple-600 text-sm font-medium'>
                    New: AI-Powered Tools Available
                </div>
                <h1 className='font-bold text-6xl '>
                    Supercharge Your <br /> <span className='text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent '>Digital Workflow</span>
                </h1>

                <p className='text-gray-600'>
                    Access premium AI tools, design assets, templates, <br />
                    and productivity software all in one place. <br /> Start creating faster today.
                </p>

                <div className="flex justify-center md:justify-start gap-3">
                    <button className='btn rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
                        Get Started
                    </button>
                    <button className='btn btn-outline rounded-2xl text-indigo-600 hover:bg-gradient-to-r  hover:from-indigo-600 hover:to-purple-600 hover:text-white  transition-all duration-300'>
                      <img src={Btn} alt="" /> Explore
                    </button>
                </div>
            </div>

            <div className="w-full  flex justify-center">
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