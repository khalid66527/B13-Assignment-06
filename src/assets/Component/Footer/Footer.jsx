import React from 'react';
import inst from "../../products/Instagram.png"
import face from "../../products/Facebook.png"
import vector from "../../products/Vector.png"
const FooterSection = () => {
    return (
        <footer className="bg-[#0B1120] text-gray-400 py-16 px-4 border-t border-gray-800">
            <div className="container mx-auto">
                {/* Main Content */}
                <div className="grid text-center grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
                        <p className="max-w-xs leading-relaxed text-sm ">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Product</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">About</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Resources</h3>
                        <ul className="space-y-4 text-sm mb-10">
                            <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Social Links</h3>
                        <div className="flex gap-3">
                            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full text-black font-bold text-xs hover:bg-gray-200 cursor-pointer">
                                <img src={inst} alt="" />
                            </div>
                            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full text-black font-bold text-xs hover:bg-gray-200 cursor-pointer">
                                <img src={face} alt="" />
                            </div>
                            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full text-black font-bold text-xs hover:bg-gray-200 cursor-pointer">
                                <img src={vector} alt="" />
                            </div>
                        </div>
                    </div>



                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px]">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer">Cookies</span>
                    </div>
                </div>



            </div>
        </footer>
    );
};

export default FooterSection;













