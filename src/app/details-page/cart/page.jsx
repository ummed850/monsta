"use client"
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function page() {
    return (
        <div>
            <div className=''>
                <div className='bg-[linear-gradient(120deg,_#a6c0fe_0%,_#f68084_100%)] border-y-2 border-gray-500 py-3'>
                    <div className='text-center text-4xl font-bold font-serif mt-14'>
                        <h1>Shopping Cart</h1>
                    </div>

                    <div className='max-w-[100%] mx-auto flex justify-center items-center gap-2 text-xl py-5'>
                        <Link href={"/"}> <p className='hover:text-orange-400 cursor-pointer text-[25px]'>Home</p></Link>
                        <FaChevronRight className='hover:text-orange-400 mt-2 cursor-pointer' />
                        <p className='hover:text-orange-400 cursor-pointer text-[25px]'> My Wishlist</p>
                    </div>
                </div>

                <div className='max-w-[1420px] mx-auto my-10'>
                    <div className="p-6">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-[linear-gradient(135deg,_#EEAD92_10%,_#6018DC_100%)]">
                                    <th className="border p-3">Delete</th>
                                    <th className="border p-3">Image</th>
                                    <th className="border p-3">Product</th>
                                    <th className="border p-3">Price</th>
                                    <th className="border p-3">Quantity</th>
                                    <th className="border p-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example Row */}
                                <tr className="border">
                                    <td className="p-4 border">
                                        <button
                                            data-tooltip-id="delete-tooltip"
                                            data-tooltip-content="Delete this item"
                                            className="text-red-500 hover:text-red-700">
                                            <FaTrashAlt size={20} />
                                        </button>
                                    </td>
                                    <td className="p-4 border">
                                        <img
                                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg"
                                            alt="Product"
                                            className="mx-auto w-24 h-24 object-cover"
                                        />
                                    </td>
                                    <td className="p-4 border">Evan Coffee Table</td>
                                    <td className="p-4 border font-semibold">Rs. 2,300</td>
                                    <td className="p-4 border">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                                                <FaMinus size={14} />
                                            </button>
                                            <input
                                                type="text"
                                                value="1"
                                                readOnly
                                                className="w-12 text-center border rounded"
                                            />
                                            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                                                <FaPlus size={14} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4 border font-semibold">Rs. 2,300</td>
                                </tr>

                                {/* Another Example Row */}
                                <tr className="border">
                                    <td className="border">
                                        <button
                                            data-tooltip-id="delete-tooltip"
                                            data-tooltip-content="Delete this item"
                                            className="text-red-500 hover:text-red-700">
                                            <FaTrashAlt size={20} />
                                        </button>
                                    </td>
                                    <td className="border">
                                        <img
                                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                                            alt="Product"
                                            className="mx-auto w-24 h-24 object-cover"
                                        />
                                    </td>
                                    <td className="border">Caroline Study Tables</td>
                                    <td className="border font-semibold">Rs. 2,500</td>
                                    <td className="border">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                                                <FaMinus size={14} />
                                            </button>
                                            <input
                                                type="text"
                                                value="1"
                                                readOnly
                                                className="w-12 text-center border rounded"
                                            />
                                            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                                                <FaPlus size={14} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border font-semibold">Rs. 2,500</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Update Cart Button */}
                        <div className="flex justify-end mt-4">
                            <button className="px-6 py-2 bg-[linear-gradient(135deg,_#92FFC0_10%,_#002661_100%)] text-white font-semibold rounded hover:bg-gray-800">
                                UPDATE CART
                            </button>
                        </div>

                        <Tooltip
                            id="delete-tooltip"
                            place="top"
                            className="!bg-black !text-white !text-sm !px-3 !py-2 !rounded-md !shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <section className=''>
                <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row gap-8 p-6 bg-gray-100 rounded-md shadow-md">
                    {/* Coupon Section */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-gray-800 text-white p-4 rounded-t-md">
                            <h2 className="text-lg font-semibold">COUPON</h2>
                        </div>
                        <div className="p-4 border border-gray-300 rounded-b-md">
                            <p className="text-sm text-gray-700 mb-2">Enter your coupon code if you have one:</p>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Coupon code"
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-indigo-500"
                                />
                                <button className="bg-gray-800 text-white py-2 px-4 rounded-md ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
                                    APPLY COUPON
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cart Totals Section */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-gray-800 text-white p-4 rounded-t-md">
                            <h2 className="text-lg font-semibold">CART TOTALS</h2>
                        </div>
                        <div className="p-4 border border-gray-300 rounded-b-md">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-700">Subtotal</span>
                                <span className="font-semibold">Rs. 4,800</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-700">Discount (-)</span>
                                <span className="font-semibold">Rs. 0</span>
                            </div>
                            <hr className="border-gray-300 mb-2" />
                            <div className="flex justify-between mb-4">
                                <span className="font-semibold">Total</span>
                                <span className="text-lg font-bold">Rs. 4,800</span>
                            </div>
                            <button className="bg-gradient-to-t from-[#5ee7df] to-[#b490ca]
                             text-white py-3 px-6 rounded-md w-full hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}