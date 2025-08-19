"use client"
import Link from 'next/link';
import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function page() {
  return (
    <div className='mt-5'>
      <div className='text-center text-4xl font-bold font-serif mt-14'>
        <h1>My Wishlist</h1>
      </div>

      <div className='border-b-2  max-w-[1550px] mx-auto flex justify-center items-center gap-2 text-xl py-5'>
        <Link href={"/"}> <p className='hover:text-orange-400 cursor-pointer text-[25px]'>Home</p></Link>
        <FaChevronRight className='hover:text-orange-400 mt-2 cursor-pointer' />
        <p className='hover:text-orange-400 cursor-pointer text-[25px]'> My Wishlist</p>
      </div>

      <div className="container mx-auto p-4 my-10">
        <table className="w-[1380px] mx-auto border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="border-b-2 border-brown-500 text-center text-brown-700
            bg-[#1bc0cc] bg-[linear-gradient(90deg,rgba(27,192,204,0.49)_0%,rgba(217,151,46,0.44)_27%,rgba(217,43,202,0.56)_50%,rgba(89,110,52,0.53)_78%,rgba(76,194,212,0.47)_100%)]
            ">
              <th className="p-3 border text-white text-center">Delete</th>
              <th className="p-3 border text-white text-center">Image</th>
              <th className="p-3 border text-white text-center">Product</th>
              <th className="p-3 border text-white text-center">Price</th>
              <th className="p-3 border text-white text-center">Stock Status</th>
              <th className="p-3 border text-white text-center">Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-center">
              <td className="p-3 border">
                <button
                  className="text-orange-500 text-2xl hover:text-brown-700 font-extrabold"
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Delete Item"
                >
                  ×
                </button>
              </td>
              <td className="border">
                <img
                  src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                  alt=""
                  className="w-48 mx-auto h-28 object-cover rounded"
                />
              </td>
              <td className="p-3 border">Caroline Study Tables</td>
              <td className="p-3 border">Rs. 2,500</td>
              <td className="p-3 border text-red-500">Out of Stock</td>
              <td className="p-3 border">
                <button className="bg-[#1bc0cc] bg-[linear-gradient(90deg,rgba(27,192,204,0.18)_0%,rgba(217,151,46,0.13)_27%,rgba(217,43,202,0.19)_50%,rgba(89,110,52,0.19)_78%,rgba(76,194,212,0.22)_100%)] text-white px-4 py-2 rounded hover:bg-green-600">
                  ADD TO CART
                </button>
              </td>
            </tr>
            <tr className="border text-center">
              <td className="p-3 border">
                <button
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Delete Item"
                  className="text-orange-500 text-2xl hover:text-brown-700 font-extrabold">×</button>
              </td>
              <td className="py-2 border">
                <img
                  src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg"
                  alt="Evan Coffee Table"
                  className="w-48 mx-auto h-28 object-cover rounded"
                />
              </td>
              <td className="p-3 border">Evan Coffee Table</td>
              <td className="p-3 border">Rs. 2,300</td>
              <td className="p-3 border text-red-500">Out of Stock</td>
              <td className="p-3 border">
                <button className="bg-[#1bc0cc] bg-[linear-gradient(90deg,rgba(27,192,204,0.18)_0%,rgba(217,151,46,0.13)_27%,rgba(217,43,202,0.19)_50%,rgba(89,110,52,0.19)_78%,rgba(76,194,212,0.22)_100%)] text-white px-4 py-2 rounded hover:bg-green-600">
                  ADD TO CART
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <Tooltip id="delete-tooltip" place="top" className="text-white bg-pink-700" />
      </div>

    </div>
  )
}

