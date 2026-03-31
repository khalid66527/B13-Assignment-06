import React from 'react';

const Review = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12'>
            
            <div className="container mx-auto px-4">
                
                <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8 md:gap-0">
                    
                    {/* Item 1 */}
                    <div className="px-6 md:border-r border-white/30">
                        <h2 className='font-bold text-3xl md:text-4xl mb-2'>50K+</h2>
                        <p>Active Users</p>
                    </div>

                    {/* Item 2 */}
                    <div className="px-6 md:border-r border-white/30">
                        <h2 className='font-bold text-3xl md:text-4xl mb-2'>200+</h2>
                        <p>Premium Tools</p>
                    </div>

                    {/* Item 3 */}
                    <div className="px-6">
                        <h2 className='font-bold text-3xl md:text-4xl mb-2'>4.9</h2>
                        <p>Rating</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Review;