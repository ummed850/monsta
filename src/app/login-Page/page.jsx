'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div>
        <h1 className='text-5xl font-extrabold font-serif text-center py-10'>My Account</h1>
      </div>

      <div className='border-b-2  max-w-[1550px] mx-auto flex justify-center items-center gap-2 text-xl py-5'>
        <Link href={"/"}> <p className='hover:text-orange-400 cursor-pointer text-[25px]'>Home</p></Link>
        <FaChevronRight className='hover:text-orange-400 cursor-pointer' />
        <p className='hover:text-orange-400 cursor-pointer text-[25px]'> My Account</p>
      </div>

      <div>
        <div>


          {/* Customer Login Area */}
          <div className="pb-16">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Login Section */}
                <div className="account_form">
                  <h2 className="hover:text-orange-400 text-center text-2xl font-serif font-semibold text-gray-800 capitalize mb-8 py-8">
                    login
                  </h2>
                  <form action="#" className="border border-gray-200 rounded-md p-6">
                    <p className="mb-6">
                      <label htmlFor="login-username" className="block text-gray-700 text-sm font-semibold mb-2 cursor-pointer hover:text-brown-500">
                        Username or email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="login-username"
                        className="border border-gray-300 h-10 w-full px-4 rounded focus:outline-none focus:border-brown-500"
                      />
                    </p>
                    <p className="mb-6">
                      <label htmlFor="login-password" className="block text-gray-700 text-sm font-semibold mb-2 cursor-pointer hover:text-brown-500">
                        Passwords <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        id="login-password"
                        className="border border-gray-300 h-10 w-full px-4 rounded focus:outline-none focus:border-brown-500"
                      />
                    </p>
                    <div className="login_submit text-right md:text-right">
                      <a href="#" className="text-sm text-gray-600 hover:text-brown-500 float-left md:float-left leading-10 md:leading-10 mb-5 md:mb-0">
                        Lost your password?
                      </a>
                      <label htmlFor="remember" className="inline-flex items-center text-gray-700 text-sm mr-4">
                        <input id="remember" type="checkbox" className="form-checkbox h-4 w-4 text-brown-500 focus:ring-brown-500 rounded" />
                        <span className="ml-2">Remember me</span>
                      </label>
                      <button
                        type="submit"
                        className="bg-[#c09578] hover:bg-brown-700 text-white font-semibold text-sm h-9 px-5 rounded-full transition-colors duration-300 ml-4"
                      >
                        login
                      </button>
                    </div>
                  </form>
                </div>

                {/* Register Section */}
                <div className="account_form mt-14 md:mt-0">
                  <h2 className="text-center hover:text-orange-400 text-2xl font-serif py-8 font-semibold text-gray-800 capitalize mb-8">
                    Register
                  </h2>
                  <form action="#" method="post" className="border border-gray-200 rounded-md p-6">
                    <p className="mb-6">
                      <label htmlFor="register-email" className="block text-gray-700 text-sm font-semibold mb-2 cursor-pointer hover:text-brown-500">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="register-email"
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Enter your email required')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        placeholder="Enter Your Email"
                        className="border border-gray-300 h-10 w-full px-4 rounded focus:outline-none focus:border-brown-500"
                      />
                    </p>

                    <p className="mb-6 relative ">
                      <label htmlFor="register-password" className="block text-gray-700 text-sm font-semibold mb-2 cursor-pointer hover:text-brown-500">
                        Passwords <span className="text-red-500">*</span>
                      </label>
                      <div className=''>
                        <input
                          placeholder="Enter Your Password"
                          type={showPassword ? 'text' : 'password'}
                          id="register-password"
                          className="border border-gray-300 h-10 w-full px-4 rounded focus:outline-none focus:border-brown-500"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brown-500 focus:outline-none"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash className='mt-7' /> : <FaEye className='mt-7' />}
                        </button>

                      </div>
                    </p>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-semibold mb-2 cursor-pointer hover:text-brown-500">
                        OTP <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="border border-gray-300 h-10 w-full px-4 rounded focus:outline-none focus:border-brown-500"
                        type="number"
                        placeholder="ENTER YOUR OTP"
                      />
                    </div>

                    <div className="login_submit text-right">
                      <button
                        type="button"
                        className="bg-[#c09578] font-bold hover:bg-gray-400 text-white text-sm h-9 px-5 rounded-full transition-colors duration-300 mr-4"
                      >
                        Get Otp
                      </button>
                      <button
                        type="submit"
                        className="hover:bg-[#54d481] bg-[#c09578] text-white font-bold text-sm h-9 px-5 rounded-full transition-colors duration-300"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
