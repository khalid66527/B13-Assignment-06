import React from 'react';

const TransformWorkflow = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter. 
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <button className="bg-white text-[#7C3AED] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg">
                        Explore Products
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                        View Pricing
                    </button>
                </div>

                <p className="text-purple-200 text-sm">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default TransformWorkflow;