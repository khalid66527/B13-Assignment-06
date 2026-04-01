import React from 'react';

const TransparentPricing = () => {
    return (
        <div>
    <div className="bg-gray-50 py-16">

        {/* Heading */}
        <div className="container mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-3 text-gray-900">
                Simple, Transparent Pricing
            </h1>
            <p className="text-gray-500">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">

            {/* Card 1: Starter */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <h2 className="text-2xl font-bold mb-1">Starter</h2>
                <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
                <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-500">/Month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-600">
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Access to 10 free tools</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Basic templates</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Community support</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> 1 project per month</li>
                </ul>
                <button className="w-full py-3 px-6btn rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    Get Started Free
                </button>
            </div>

            {/* Card 2: Pro (Featured) */}
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600  p-8 rounded-2xl shadow-xl transform lg:scale-105 border-4 border-[#7C3AED]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
                <h2 className="text-2xl font-bold mb-1 text-white">Pro</h2>
                <p className="text-purple-100 text-sm mb-6">Best for professionals</p>
                <div className="mb-6 text-white">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-purple-100">/Month</span>
                </div>
                <ul className="space-y-3 mb-8 text-white">
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Access to all premium tools</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Unlimited templates</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Priority support</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Unlimited projects</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Cloud sync</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Advanced analytics</li>
                </ul>
                <button className="w-full py-3 px-6 rounded-xl bg-white text-[#7C3AED] font-bold hover:bg-gray-50 transition-colors">
                    Start Pro Trial
                </button>
            </div>

            {/* Card 3: Enterprise */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <h2 className="text-2xl font-bold mb-1 text-gray-900">Enterprise</h2>
                <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
                <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$99</span>
                    <span className="text-gray-500">/Month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-600">
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Everything in Pro</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Team collaboration</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Custom integrations</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Dedicated support</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> SLA guarantee</li>
                    <li className="flex items-center gap-2"><spam className="text-green-600">✓</spam> Custom branding</li>
                </ul>
                <button className="w-full py-3 px-6btn rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:bg-[#6D28D9] transition-colors">
                    Contact Sales
                </button>
            </div>

        </div>
    </div>
</div>
    );
};

export default TransparentPricing;