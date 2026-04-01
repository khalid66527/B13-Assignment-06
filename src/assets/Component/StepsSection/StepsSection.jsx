import React from 'react';
import user from "../../products/user.png";
import packageImg from "../../products/package.png";
import rocket from "../../products/rocket.png";

const StepsSection = () => {
    return (
        <div className="bg-gray-50 py-16">

            {/* Heading */}
            <div className="container mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-3">
                    Get Started in 3 Steps
                </h1>
                <p className="text-gray-500">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">

                {/* Card 1 */}
                <div className="relative bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all text-center">
                    <span className="absolute -top-4 right-4 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">01</span>

                    <img src={user} alt="" className="mx-auto mb-4 w-16 h-16 object-contain" />

                    <h2 className="text-xl font-semibold mb-2">Create Account</h2>
                    <p className="text-gray-500 text-sm">
                        Sign up to get access to all features and tools.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="relative bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all text-center">
                    <span className="absolute -top-4 right-4 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">02</span>

                    <img src={packageImg} alt="" className="mx-auto mb-4 w-16 h-16 object-contain" />

                    <h2 className="text-xl font-semibold mb-2">Choose Products</h2>
                    <p className="text-gray-500 text-sm">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="relative bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all text-center">
                    <span className="absolute -top-4 right-4 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">03</span>

                    <img src={rocket} alt="" className="mx-auto mb-4 w-16 h-16 object-contain" />

                    <h2 className="text-xl font-semibold mb-2">Start Creating</h2>
                    <p className="text-gray-500 text-sm">
                        Download and start using your premium tools immediately.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default StepsSection;