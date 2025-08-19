"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronRight, FaTrashAlt } from 'react-icons/fa';

export default function page() {

    const [activeTab, setActiveTab] = useState("tab1");

    const tabs = [
        { id: "tab1", label: "My Dashboard" },
        { id: "tab2", label: "Orders" },
        { id: "tab3", label: "Address" },
        { id: "tab4", label: "My Profile" },
        { id: "tab5", label: "Change Password" },

    ];

    return (
        <div>
            <div className='mt-5'>

                <div className='absolute right-5'>
                    <Link href={"/"}>  <div className='text-xl w-[150px] mx-auto text-center px-4 py-3 uppercase transition-all bg-gradient-to-r from-[#77A1D3] to-[#79CBCA] bg-[200%] hover:bg-right text-white shadow-md rounded-lg block hover:text-white no-underline'>
                        <button>Logout</button>
                    </div>  </Link>
                </div>

                <div className='text-center text-4xl font-bold font-serif mt-14'>
                    <h1>My Dashboard</h1>
                </div>

                <div className='border-b-2  max-w-[100%] mx-auto flex justify-center items-center gap-2 text-xl py-5'>
                    <Link href={"/"}> <p className='hover:text-orange-400 cursor-pointer text-[25px]'>Home</p></Link>
                    <FaChevronRight className='hover:text-orange-400 mt-2 cursor-pointer' />
                    <p className='hover:text-orange-400 cursor-pointer text-[25px]'> My Dashboard</p>
                </div>
            </div>

            <div className="flex max-w-[1580px] mx-auto bg-gray-100 p-6">
                {/* Left Side Tabs */}
                <div className="w-1/4 bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-3xl font-semibold mb-6 text-center">My Dashboard</h2>
                    <ul className="space-y-2">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-center px-4 py-2 rounded-lg transition-all
                                         ${activeTab === tab.id
                                            ? "bg-gradient-to-r from-[#16A085] via-[#F4D03F] to-[#16A085] text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 ml-6 bg-white shadow-md rounded-lg p-6">
                    {activeTab === "tab1" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">My Dashboard</h2>
                            <p className="text-gray-700">From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
                        </div>
                    )}

                    {activeTab === "tab2" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Orders</h2>
                            <div>

                                <table className="min-w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border-b border-black text-left py-3 px-6 font-semibold text-gray-800">Order</th>
                                            <th className="border-b border-black text-left py-3 px-6 font-semibold text-gray-800">Date</th>
                                            <th className="border-b border-black text-left py-3 px-6 font-semibold text-gray-800">Status</th>
                                            <th className="border-b border-black text-left py-3 px-6 font-semibold text-gray-800">Total</th>
                                            <th className="border-b border-black text-left py-3 px-6 font-semibold text-gray-800">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-4 px-6">1</td>
                                            <td className="py-4 px-6 font-semibold">May 10, 2018</td>
                                            <td className="py-4 px-6 font-semibold">Completed</td>
                                            <td className="py-4 px-6 font-semibold">Rs. 25.00 For 1 Item</td>
                                            <td className="py-4 px-6 text-[#D1A36E] font-semibold cursor-pointer">View</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-4 px-6">2</td>
                                            <td className="py-4 px-6 font-semibold">May 10, 2018</td>
                                            <td className="py-4 px-6 font-semibold">Processing</td>
                                            <td className="py-4 px-6 font-semibold">Rs. 17.00 For 1 Item</td>
                                            <td className="py-4 px-6 text-[#D1A36E] font-semibold cursor-pointer">View</td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    )}

                    {activeTab === "tab3" && (
                        <div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-8">
                                    The following addresses will be used on the checkout page by default.
                                </p>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Billing Address */}
                                    <div className="border rounded p-6">
                                        <h2 className="text-lg font-semibold mb-6">Billing Address</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Billing Name*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Billing Email*</label>
                                                <input type="email" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Billing Mobile Number*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Billing Address*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Country*</label>
                                                <input type="text" placeholder="Select Country" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">State*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">City*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>

                                            <button
                                                type="submit"
                                                className="bg-[#D1A36E] text-white font-semibold rounded-full px-6 py-2 mt-4 uppercase text-sm"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>

                                    {/* Shipping Address */}
                                    <div className="border rounded p-6">
                                        <h2 className="text-lg font-semibold mb-6">Shipping Address</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Shipping Name*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Shipping Email*</label>
                                                <input type="email" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Shipping Mobile Number*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Shipping Address*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">Country*</label>
                                                <input type="text" placeholder="Select Country" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">State*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium">City*</label>
                                                <input type="text" className="w-full border rounded px-3 py-2" />
                                            </div>

                                            <button
                                                type="submit"
                                                className="bg-[#D1A36E] text-white font-semibold rounded-full px-6 py-2 mt-4 uppercase text-sm"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>

                            </div>
                        </div>
                    )}

                    {activeTab === "tab4" && (
                        <div>

                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">My Profile</h2>

                                <form className="border rounded p-6 space-y-6">
                                    {/* Gender Selection */}
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="gender" className="accent-blue-600" defaultChecked />
                                            <span className="text-gray-700 font-medium">Mr.</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="gender" className="accent-blue-600" />
                                            <span className="text-gray-700 font-medium">Mrs.</span>
                                        </label>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label className="block mb-1 text-sm font-semibold text-gray-700">Name*</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-1 text-sm font-semibold text-gray-700">Email*</label>
                                        <input
                                            type="email"
                                            className="w-full border rounded px-3 py-2 bg-gray-100"
                                        />
                                    </div>

                                    {/* Mobile Number */}
                                    <div>
                                        <label className="block mb-1 text-sm font-semibold text-gray-700">Mobile Number*</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Enter mobile number"
                                        />
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <label className="block mb-1 text-sm font-semibold text-gray-700">Address*</label>
                                        <input
                                            type="text"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Enter your address"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="bg-[#D1A36E] text-white font-semibold rounded-full px-6 py-2 uppercase text-sm hover:bg-[#b88a5c] transition"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {activeTab === "tab5" && (
                        <div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6">Change Password</h2>

                                <form className="border rounded p-6 space-y-6">
                                    {/* Current Password */}
                                    <div>
                                        <label className="block mb-1 text-sm font-semibold text-gray-700">Current Password</label>
                                        <input
                                            type="password"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Enter current password"
                                        />
                                    </div>

                                    {/* New Password */}
                                    <div>
                                        <label className="block mb-1 text-sm font-semibold text-gray-700">New Password</label>
                                        <input
                                            type="password"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Enter new password"
                                        />
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label className="block mb-1 text-sm font-semibold text-gray-700">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Confirm new password"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="bg-[#D1A36E] text-white font-semibold rounded-full px-8 py-2 uppercase text-sm hover:bg-[#b88a5c] transition"
                                        >
                                            Change Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='my-3'>
                <Link href={"/"}>  <div className='text-xl w-[150px] mx-auto text-center px-4 py-3 uppercase transition-all bg-gradient-to-r from-[#77A1D3] to-[#79CBCA] bg-[200%] hover:bg-right text-white shadow-md rounded-lg block hover:text-white no-underline'>
                    <button>Logout</button>
                </div>  </Link>
            </div>
        </div>
    )
}
