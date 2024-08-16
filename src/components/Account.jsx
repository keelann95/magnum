// import React from "react";

const Account = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-8 font-poppins">
      <div className="flex gap-2 text-sm text-gray-600 mb-8">
        <div className="p-8 text-base font-medium">
          <a href="#" className="text-gray-600 hover:text-gray-400 transition duration-300">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="text-gray-700 hover:text-gray-400 transition duration-300 font-semibold">My Account</a>
        </div>
      </div>
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="p-10 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Manage My Account</h1>
        </div>
        <div className="p-8">
          <div className="mb-6">
            <div className="text-lg font-semibold text-gray-700">
              <a href="#" className="hover:text-gray-300 transition duration-300">My Profile</a>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4 font-poppins">My Wishlist</h2>
            <div className="mt-2">
              <a href="#" className="text-gray-800 hover:text-gray-400 transition duration-300">Wishlist</a>
            </div>
          </div>
          <div className="flex justify-end mb-8">
            <h1 className="text-xl font-medium">
              Welcome, <span className="font-bold text-red-600">Keelann</span>
            </h1>
          </div>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Edit Your Profile</h2>
            <form action="" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Tunechi"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Keelann"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Kingston, 5443, United States"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="keelann@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">Password changes</label>
                <input
                  type="password"
                  id="currentPassword"
                  placeholder="Current Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <input
                  type="password"
                  id="newPassword"
                  placeholder="New Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <input
                  type="password"
                  id="confirmNewPassword"
                  placeholder="Confirm New Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </form>
            <div className="mt-6 flex justify-end space-x-4">
              <a
                href="#"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-300"
              >
                Save Changes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
