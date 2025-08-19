import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default function page() {
    return (
        <div>

            <div>
                <div className='bg-[linear-gradient(120deg,_#a6c0fe_0%,_#f68084_100%)] border-y-2 border-gray-500 py-3'>
                    <div className='text-center text-4xl font-bold font-serif mt-14'>
                        <h1>Checkout</h1>
                    </div>

                    <div className='max-w-[100%] mx-auto flex justify-center items-center gap-2 text-xl py-5'>
                        <Link href={"/"}> <p className='hover:text-orange-400 cursor-pointer text-[25px]'>Home</p></Link>
                        <FaChevronRight className='hover:text-orange-400 mt-2 cursor-pointer' />
                        <p className='hover:text-orange-400 cursor-pointer text-[25px]'> Checkout </p>
                    </div>
                </div>

                <div className='max-w-[1480px] mx-auto'>
                    <div className='grid grid-cols-2 gap-10 py-10'>
                        <div className="bg-gray-100 p-8">
                            <div className="bg-gray-800 text-white p-4 rounded-t-md mb-6">
                                <h2 className="text-lg font-semibold uppercase">Billing Details</h2>
                            </div>
                            <form
                                method="POST"
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                        Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name" // Important for backend
                                        placeholder="Enter your name"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
                                        Mobile Number<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Enter your mobile number"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="billing-name" className="block text-gray-700 text-sm font-bold mb-2">
                                        Billing Name
                                    </label>
                                    <input
                                        type="text"
                                        id="billing-name"
                                        name="billingName"
                                        placeholder="Enter billing name"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="billing-email" className="block text-gray-700 text-sm font-bold mb-2">
                                        Billing Email<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="billing-email"
                                        name="billingEmail"
                                        placeholder="Enter billing email"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="billing-mobile" className="block text-gray-700 text-sm font-bold mb-2">
                                        Billing Mobile Number<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="billing-mobile"
                                        name="billingMobile"
                                        placeholder="Enter billing mobile number"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="billing-address" className="block text-gray-700 text-sm font-bold mb-2">
                                        Billing Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="billing-address"
                                        name="billingAddress"
                                        placeholder="Enter billing address"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
                                        Country<span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="">Select Country</option>
                                        <option value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>

                                <div className="mb-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                                            State<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            placeholder="Enter state"
                                            required
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                                            City<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Enter city"
                                            required
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="shipToDifferentAddress"
                                            className="form-checkbox h-5 w-5 text-gray-600 rounded"
                                        />
                                        <span className="ml-2 text-gray-700 text-sm font-medium">
                                            Ship To A Different Address?
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 font-bold focus:outline-none focus:shadow-outline w-full md:w-auto m-2 px-12 py-4 text-center uppercase transition-all duration-500 bg-gradient-to-r from-[#16A085] via-[#F4D03F] to-[#16A085] bg-[length:200%_auto] shadow-md rounded-lg block hover:bg-right-center hover:text-white"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>

                        <div>
                            <div className="bg-gray-100 p-8">
                                {/* Order Notes Section */}
                                <div className="mb-8">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Order Notes</h2>
                                    <textarea
                                        placeholder="Notes about your order, e.g., special notes for delivery"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-y" // Added h-32 and resize-y
                                    />
                                </div>

                                {/* Your Order Section */}
                                <div>
                                    <h2 className="bg-gray-800 text-white p-4 rounded-t-md text-lg font-semibold uppercase mb-4">Your Order</h2>
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Product
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Evan Coffee Table x 1
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Rs. 2,300
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Caroline Study Table x 1
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Rs. 2,500
                                                    </td>
                                                </tr>
                                                {/* Cart Subtotal Row */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        Cart Subtotal
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Rs. 4,800
                                                    </td>
                                                </tr>
                                                {/* Discount Row */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        Discount (-)
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Rs. 0
                                                    </td>
                                                </tr>
                                                {/* Order Total Row */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                                        Order Total
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                                                        Rs. 4,800
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <button className="m-2 px-12 py-4 text-center uppercase transition-all duration-500 bg-gradient-to-r from-[#77A1D3] via-[#79CBCA] to-[#77A1D3] bg-[length:200%_auto] text-white shadow-md block hover:bg-right-center hover:text-white  font-bold rounded focus:outline-none focus:shadow-outline mt-6 w-full">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
