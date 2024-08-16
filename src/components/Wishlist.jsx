/** @format */

import NavBar from "./NavBar";
import Footer from "./Footer";
import "../Wishlist.css";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Wishlist = () => {
	return (
		<>
			<div className='min-h-screen bg-gray-100'>
				<div className='container mx-auto py-8'>
					<div className='flex justify-between items-center mb-6'>
						<p className='text-2xl font-semibold'>Wishlist (4)</p>
						<button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
							Move All To Bag
						</button>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
						<div className='bg-white shadow-md rounded-lg overflow-hidden'>
							<div className='relative'>
								<img
									src='https://images.unsplash.com/photo-1604494320172-4e4e5f40359d?w=500&auto=format&fit=crop&q=60'
									alt='A handbag'
									className='w-full h-48 object-cover'
								/>
								<div className='absolute top-2 right-2 flex items-center'>
									<p className='bg-red-500 text-white px-2 py-1 text-xs rounded'>
										-35%
									</p>
									<IoTrashOutline className='text-gray-600 ml-2 cursor-pointer' />
								</div>
							</div>
							<div className='p-4'>
								<p className='text-lg font-medium'>
									Gucci Duffle bag
								</p>
								<div className='flex items-center justify-between'>
									<span className='text-green-500 font-bold'>
										$960
									</span>
									<span className='line-through text-gray-500'>
										$1160
									</span>
								</div>
								<button className='bg-yellow-500 text-white w-full mt-4 py-2 flex justify-center items-center rounded hover:bg-yellow-600'>
									<MdOutlineShoppingCart className='mr-2' />{" "}
									Add To Cart
								</button>
							</div>
						</div>

						<div className='bg-white shadow-md rounded-lg overflow-hidden'>
							<div className='relative'>
								<img
									src='https://media.istockphoto.com/id/1364911473/photo/simple-wireless-gamepad-for-gaming-3d-render-illustration.webp'
									alt='Gamepad'
									className='w-full h-48 object-cover'
								/>
								<IoTrashOutline className='absolute top-2 right-2 text-gray-600 cursor-pointer' />
							</div>
							<div className='p-4'>
								<p className='text-lg font-medium'>
									GP11 Shooter USB Gamepad
								</p>
								<span className='text-green-500 font-bold'>
									$550
								</span>
								<button className='bg-yellow-500 text-white w-full mt-4 py-2 flex justify-center items-center rounded hover:bg-yellow-600'>
									<MdOutlineShoppingCart className='mr-2' />{" "}
									Add To Cart
								</button>
							</div>
						</div>

						<div className='bg-white shadow-md rounded-lg overflow-hidden'>
							<div className='relative'>
								<img
									src='https://images.unsplash.com/photo-1552327359-d86398116072?w=500&auto=format&fit=crop&q=60'
									alt='Jacket'
									className='w-full h-48 object-cover'
								/>
								<IoTrashOutline className='absolute top-2 right-2 text-gray-600 cursor-pointer' />
							</div>
							<div className='p-4'>
								<p className='text-lg font-medium'>
									Quilted Satin Jacket
								</p>
								<span className='text-green-500 font-bold'>
									$750
								</span>
								<button className='bg-yellow-500 text-white w-full mt-4 py-2 flex justify-center items-center rounded hover:bg-yellow-600'>
									<MdOutlineShoppingCart className='mr-2' />{" "}
									Add To Cart
								</button>
							</div>
						</div>

						<div className='bg-white shadow-md rounded-lg overflow-hidden'>
							<div className='relative'>
								<img
									src='https://images.unsplash.com/photo-1658673609646-9c7ba9514b89?w=500&auto=format&fit=crop&q=60'
									alt='Cooler'
									className='w-full h-48 object-cover'
								/>
								<IoTrashOutline className='absolute top-2 right-2 text-gray-600 cursor-pointer' />
							</div>
							<div className='p-4'>
								<p className='text-lg font-medium'>
									RGB liquid CPU Cooler
								</p>
								<span className='text-green-500 font-bold'>
									$1960
								</span>
								<button className='bg-yellow-500 text-white w-full mt-4 py-2 flex justify-center items-center rounded hover:bg-yellow-600'>
									<MdOutlineShoppingCart className='mr-2' />{" "}
									Add To Cart
								</button>
							</div>
						</div>
					</div>

					<div className='mb-12'>
						<div className='flex justify-between items-center mb-4'>
							<p className='text-2xl font-semibold'>
								Just For You
							</p>
							<button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
								See All
							</button>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
							<div className='bg-white shadow-md rounded-lg overflow-hidden'>
								<div className='relative'>
									<img
										src='https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60'
										alt='Gaming Laptop'
										className='w-full h-48 object-cover'
									/>
									<p className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded'>
										-35%
									</p>
									<MdOutlineRemoveRedEye className='absolute top-2 left-2 text-gray-600 cursor-pointer' />
								</div>
								<div className='p-4'>
									<p className='text-lg font-medium'>
										ASUS FHD Gaming Laptop
									</p>
									<div className='flex items-center justify-between'>
										<span className='text-green-500 font-bold'>
											$960
										</span>
										<span className='line-through text-gray-500'>
											$1160
										</span>
									</div>
									<div className='flex items-center mt-2'>
										<FaStar className='text-yellow-500' />
										<FaStar className='text-yellow-500' />
										<FaStar className='text-yellow-500' />
										<FaStar className='text-yellow-500' />
										<FaStar className='text-yellow-500' />
										<span className='ml-2 text-gray-600'>
											(65)
										</span>
									</div>
									<button className='bg-yellow-500 text-white w-full mt-4 py-2 flex justify-center items-center rounded hover:bg-yellow-600'>
										<MdOutlineShoppingCart className='mr-2' />{" "}
										Add To Cart
									</button>
								</div>
							</div>

							{/* Repeat the structure for other products in "Just For You" */}
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Wishlist;
