import React, { useState } from 'react';
import ProductFeatures from './ProductFeatures';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const AvailableProduct = ({ Productdata, selectedProduct, setSelectedProduct }) => {



    // console.log(Productdata, "Productdata");

    return (


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {
                Productdata.map((Product) => {
                    const [isSelected, setIsSelected] = useState(false)
                    const handleAddedCart = () => {
                        setIsSelected(true)
                        toast.success(`${Product.name} is Selected`)
                        setSelectedProduct([...selectedProduct, Product])
                    }
                    const { features } = Product;
                    // console.log(Product, "Product");
                    return <div className="card w-96 bg-base-100 shadow-lg  hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="card-body  ">
                            <div className="flex justify-between">
                                <div className="">
                                    <img src={Product.image} alt="" className="w-8 h-8 mx-auto" />
                                </div>
                                <span
                                    className={`badge badge-xs text-white ${Product.tag === "New"
                                            ? "bg-green-500"
                                            : Product.tag === "Best Seller"
                                                ? "bg-yellow-500"
                                                : Product.tag === "Popular"
                                                    ? "bg-purple-500"
                                                    : "bg-blue-400"
                                        }`}
                                >
                                    {Product.tag}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">{Product.name}</h2>

                            </div>
                            <div className="">
                                <p>{Product.description}</p>
                            </div>
                            <div className="">
                                <span className="text-xl">${Product.price}/{Product.period}</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">

                                {
                                    features.map((feature, index) => <ProductFeatures
                                        key={index}
                                        feature={feature}></ProductFeatures>)
                                }

                            </ul>
                            <div className="mt-6">
                                <button className="btn rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white" onClick={handleAddedCart}>{isSelected === true ? "Added By Cart" : "Buy Now"}</button>
                            </div>
                        </div>

                    </div>
                })
            }


        </div>
    );
};

export default AvailableProduct;