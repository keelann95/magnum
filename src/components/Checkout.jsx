// import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { RiBankCard2Fill } from "react-icons/ri";

const Checkout = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8   ">
      <div className="">
        <div className="flex gap-2 text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-gray-900">
            Account
          </a>
          <span>/</span>
          <a href="#" className="hover:text-gray-900">
            My Account
          </a>
          <span>/</span>
          <a href="#" className="hover:text-gray-900">
            Product
          </a>
          <span>/</span>
          <a href="#" className="hover:text-gray-900">
            View Cart
          </a>
          <span>/</span>
          <a href="#" className="hover:text-gray-900 font-semibold">
            CheckOut
          </a>
        </div>
        <div className=" flex flex-col md:flex-row  relative justify-around ">
          <div className=" rounded-lg shadow-lg   p-8 w-[30%]">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Billing Details
            </h1>

            <form action="" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <label
                  htmlFor="apartment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Town/City
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600  border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>
          <div className="flex relative flex-col md:flex-row w-[40%]  ">
            <div className=" rounded-lg shadow-lg  p-8 pt-[85px] mt-24">
              <div className="space-y-4 mb-6 ">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://img.freepik.com/premium-photo/purple-game-controller-with-word-xbox-it_786255-10734.jpg"
                      alt=""
                      className="w-12 h-12 object-cover rounded mr-4"
                    />
                    <h3 className="font-medium">ICD Monitor</h3>
                  </div>
                  <span className="font-semibold">$100</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://dovecomputers.co.ke/wp-content/uploads/2023/01/huawei-desktop-monitor-img-1.jpg"
                      alt=""
                      className="w-12 h-12 object-cover rounded mr-4"
                    />
                    <h3 className="font-medium">ICD Monitor</h3>
                  </div>
                  <span className="font-semibold">$100</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>$1500</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
                  <div className="flex items-center">
                    <input type="radio" name="payment" className="mr-3" />
                    <label className="font-medium">Bank</label>
                  </div>
                  <div className="flex space-x-2">
                    <FaCcVisa className="text-2xl text-blue-600" />
                    <FaCcMastercard className="text-2xl text-red-500" />
                    <RiBankCard2Fill className="text-2xl text-gray-600" />
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded">
                  <input type="radio" name="payment" className="mr-3" />
                  <label className="font-medium">Cash on delivery</label>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-700 transition duration-300 ease-in-out">
                  Apply Coupon
                </button>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-[70%] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
