// import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
		<>
			<nav className='h-[100px] border-b border-gray-500'>
				<div className='flex justify-around w-[1440px] h-[38px] relative top-[50px] left-[135px] gap-[148px]'>
					<div className='flex gap-[190px] items-center'>
						<p className='font-bold text-2xl leading-6 tracking-wide'>
							Exclusive
						</p>
						<ul className='list-none flex gap-[48px]'>
							<li className='font-poppins font-normal text-base leading-6 text-center hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out'>
								<NavLink to='/' className='hover'>
									Home
								</NavLink>
							</li>
							<li className='font-poppins font-normal text-base leading-6 text-center hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out'>
								<NavLink to='/contact' className='hover'>
									Contact
								</NavLink>
							</li>
							<li className='font-poppins font-normal text-base leading-6 text-center hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out'>
								<NavLink to='/about' className='hover'>
									About
								</NavLink>
							</li>
							<li className='font-poppins font-normal text-base leading-6 text-center hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out'>
								<NavLink to='/signup' className='hover'>
									Sign Up
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='flex w-[347px] h-[24px] gap-[24px] items-center'>
						<input
							type='text'
							placeholder='What are you looking for?'
							className='font-poppins font-normal text-xs leading-[18px] w-[243px] h-[38px] opacity-50 bg-gray-300 p-2 rounded-md'
						/>
						<IoSearchOutline className='w-[24px] h-[24px] -ml-[60px]' />
						<Link to='/wishlist'>
							<IoHeartOutline className='w-[24px] h-[24px] text-center' />
						</Link>
						<AiOutlineShoppingCart className='w-[24px] h-[24px] text-center' />
					</div>
				</div>
			</nav>
		</>
  );
}

export default NavBar