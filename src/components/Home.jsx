/** @format */

import { useEffect, useState } from "react";

// import NavBar from "./NavBar";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { fetchData } from "../fetchFlashSales";
import { fetchBest } from "../fetchBest";
import { GiDress } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { RiArmchairLine } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { IoCarOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { TiWatch } from "react-icons/ti";
import { LiaMotorcycleSolid } from "react-icons/lia";
import { MdSportsBasketball } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = ({ countdownTimer, countdownTimer2 }) => {
	const [products, setProducts] = useState([]);
	const [bests, setBests] = useState([]);

	useEffect(() => {
		fetchData().then((products) => setProducts(products.products));
	}, []);

	const product = products.map((product) => {
		const discountedPrice =
			100 * ((100 - product.discountPercentage) / product.price) ** -1;
		return (
			<div
				className='h-350px w-[290px] flex flex-col gap-[8px] relative'
				key={product.id}>
				<img
					className='h-[250px] w-[290px] rounded-[4px] bg-[#F5F5F5]'
					src={product.thumbnail}
					alt=''
				/>
				<div className='w-[60px] h-[26px] bg-[#DB4444] absolute top-[8px] left-[8px] px-[12px] py-[4px] rounded-[4px] text-white'>
					<div className='h-18px w-[31px] text-[12px] leading-[18px] '>
						-{product.discountPercentage}%
					</div>
				</div>
				<div className='absolute flex flex-col gap-[8px] top-[12px] left-[160px] text-[19px]'>
					<div className='w-[34px] h-[34px] bg-white rounded-[50%] relative  hover:bg-red-700 hover:text-[white]'>
						<CiHeart className='absolute top-[9px] left-[7px] ' />
					</div>
					<div className='w-[34px] h-[34px] bg-white rounded-[50%] relative  hover:bg-orange-600 hover:text-[white]'>
						<IoEyeOutline className='absolute top-[7px] left-[9px]' />
					</div>
				</div>

				<div className='w-[201px] h-[84px]'>
					<div className='w-[201px] h-[24px] font-[500] text-[16px] leading-[24px] '>
						{product.title}
					</div>
					<div className='text-[#DB4444] '>
						{product.price}
						<span className='text-black opacity-[50%] line-through pl-[10px]'>
							${discountedPrice.toFixed(2)}
						</span>
					</div>
					<div>
						<img src='/src/assets/ratingFlashSales.svg' alt='' />
						<div></div>
					</div>
				</div>
			</div>
		);
	});

	useEffect(() => {
		fetchBest().then((bests) => setBests(bests.products));
	}, []);

	const Bests = bests.map((best) => {
		const discountedPrice =
			100 * ((100 - best.discountPercentage) / best.price) ** -1;
		return (
			<div
				className='h-350px w-[290px] flex flex-col gap-[8px] relative'
				key={best.id}>
				<img
					className='h-[250px] w-[290px] rounded-[4px] bg-[#F5F5F5]'
					src={best.thumbnail}
					alt=''
				/>

				<div className='absolute flex flex-col gap-[8px] top-[12px] left-[160px] text-[19px]'>
					<div className='w-[34px] h-[34px] bg-white rounded-[50%] relative  hover:bg-red-700 hover:text-[white]'>
						<CiHeart className='absolute top-[9px] left-[7px] ' />
					</div>
					<div className='w-[34px] h-[34px] bg-white rounded-[50%] relative  hover:bg-orange-600 hover:text-[white]'>
						<IoEyeOutline className='absolute top-[7px] left-[9px]' />
					</div>
				</div>

				<div className='w-[201px] h-[84px]'>
					<div className='w-[201px] h-[46px] font-[500] text-[16px] leading-[24px] '>
						{best.title}
					</div>
					<div className='text-[#DB4444] '>
						{best.price}
						<span className='text-black opacity-[50%] line-through pl-[10px]'>
							${discountedPrice.toFixed(2)}
						</span>
					</div>
					<div>
						<img src='/src/assets/ratingFlashSales.svg' alt='' />
						<div></div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className='w-[384px]  h-[445px] border-r '>
				<div className='flex flex-col gap-[16px]  w-[217px] h-[344px] absolute top-[182px] left-[135px]'>
					<div>Woman&#39;s Fashion</div>
					<div>Men&#39;s Fashion</div>
					<div>Electronic</div>
					<div>Home & Electronics</div>
					<div>Medicine</div>
					<div>Sports & Outdoor</div>
					<div>Baby&#39;s & Toys</div>
					<div>Groceries & Pets</div>
					<div>Health & Beauty</div>
				</div>
				<div className='w-[892px] h-[344px] absolute top-[182px] left-[413px] bg-black'>
					<img
						className="absolute left-[320px]"
						src='https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_iPhone-11-and-iPhone-11-Pro-reviews_091719_inline.gif.large.gif'
						alt=''
					/>
				</div>
			</div>
			{/* Flash Sales */}
			<div className='w-[1308px] h-[493px] flex flex-col absolute top-[666px] left-[135px] gap-[40px] '>
				<div className='w-[1170px] h-[103px] flex justify-between'>
					<div className='h-[103px] w-[600px]  flex flex-row gap-[87px]'>
						<div className='w-[211px] h-[103px] flex flex-col gap-[24px]'>
							<div className=' flex flex-row gap-[16px]  w-[100px] h-[40px]'>
								<div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'></div>
								<div className='h-[20px] w-[64px] text-[16px] font-[600] leading-[48px] text-[#DB4444]'>
									Today&#39;s
								</div>
							</div>
							<div className='font-[600] text-[36px] leading-[48px] tracking-[4%] '>
								<h4>Flash Sales</h4>
							</div>
						</div>
						<div className='w-[302px] h-[50px] relative top-[54%]   '>
							{countdownTimer}
						</div>
					</div>
					<div className='w-[100px] h-[46px] flex flex-row gap-[8px] relative top-[54%] '>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]   rounded-[50%]'>
							<GoArrowLeft className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px] left-[11px] text-[2px]' />
						</div>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]    rounded-[50%] '>
							<GoArrowRight className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px]  text-[2px]' />
						</div>
					</div>
				</div>
				<div className='w-[1308px] h-[350px] overflow-x-scroll   flex flex-row gap-[16px]'>
					{product}
				</div>
			</div>
			<button className='absolute top-[1219px] left-[603px] w-[234px] h-[56px] px-[48px] py-[16px] bg-[#DB4444] text-white rounded-[4px] hover:outline hover:outline-2 hover:outline-[#DB4444] focus:outline focus:outline-2 focus:outline-[#DB4444] hover:bg-transparent hover:text-[#DB4444] transition duration-[0.5s]'>
				View All Products
			</button>
			<hr className='w-[1170px] absolute top-[1335px] left[1305px] ml-[135px] ' />
			{/* Browse Category */}
			<div className='w-[1308px] h-[313px] flex flex-col absolute top-[1415px] left-[135px] gap-[60px] '>
				<div className='w-[1170px] h-[108px] flex justify-between'>
					<div className='h-[103px] w-[600px]  flex flex-row gap-[87px]'>
						<div className='w-[379px] h-[103px] flex flex-col gap-[24px]'>
							<div className=' flex flex-row gap-[16px]  w-[100px] h-[40px]'>
								<div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'></div>
								<div className='h-[20px] w-[64px] text-[16px] font-[600] leading-[48px] text-[#DB4444]'>
									Categories
								</div>
							</div>
							<div className='font-[600] text-[36px] leading-[48px] tracking-[4%] '>
								<h4>Browse By Categories</h4>
							</div>
						</div>
					</div>
					<div className='w-[100px] h-[46px] flex flex-row gap-[8px] relative top-[54%] '>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]   rounded-[50%]'>
							<GoArrowLeft className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px] left-[11px] text-[2px]' />
						</div>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]    rounded-[50%] '>
							<GoArrowRight className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px]  text-[2px]' />
						</div>
					</div>
				</div>

				<div className='w-[1308px] h-[145px]   flex flex-row gap-[16px]'>
					<Link to='/womenFetch'>
						<div className='w-[170px] h-[145px] border-[1.5px] rounded-[4px] flex flex-row gap-[30px] relative '>
							<GiDress className='absolute top-[25px] left-[31px] text-[59px]' />
							<div className='w-[59px] h-[24px] absolute top-[97px] left-[25px]'>
								Woman&#39;s
							</div>
						</div>
					</Link>
					<Link to='/mensCategories'>
						<div className='w-[170px] h-[145px] border-[1.5px] rounded-[4px] flex flex-row gap-[30px] relative '>
							<GiClothes className='absolute top-[25px] left-[31px] text-[59px]' />
							<div className='w-[59px] h-[24px] absolute top-[97px] left-[25px]'>
								Man&#39;s
							</div>
						</div>
					</Link>
					<Link to='/homeEquipments'>
						<div className='w-[170px] h-[145px] border-[1.5px] rounded-[4px] flex flex-row gap-[30px] relative'>
							<RiArmchairLine className='absolute top-[25px] left-[31px] text-[59px]' />
							<div className='w-[59px] h-[24px] absolute top-[97px] left-[25px]'>
								Furniture
							</div>
						</div>
					</Link>
					<Link to='/beautyFetch'>
						<div className='w-[170px] h-[145px] border-[1.5px] rounded-[4px] flex flex-row gap-[30px] relative'>
							<GiLipstick className='absolute top-[25px] left-[31px] text-[59px]' />
							<div className='w-[59px] h-[24px] absolute top-[97px] left-[25px]'>
								Beauty
							</div>
						</div>
					</Link>
					<Link to='/kitchensFetch'>
						<div className='w-[170px] h-[145px] border-[1.5px] rounded-[4px] flex flex-row gap-[30px] relative'>
							<FaKitchenSet className='absolute top-[25px] left-[31px] text-[59px]' />
							<div className='w-[59px] h-[24px] absolute top-[97px] left-[25px]'>
								Kitchen
							</div>
						</div>
					</Link>
					<Link to='/watchFetch'>
						<div className='w-[170px] h-[145px] border-[1.5px] rounded-[4px] flex flex-row gap-[30px] relative'>
							<TiWatch className='absolute top-[25px] left-[31px] text-[59px]' />
							<div className='w-[59px] h-[24px] absolute top-[97px] left-[25px]'>
								Watches
							</div>
						</div>
					</Link>
					<Link to='/deviceFetch'>
						<div className='w-[170px] h-[145px] border-[1.5px] rounded-[4px] flex flex-row gap-[30px] relative'>
							<MdDevices className='absolute top-[25px] left-[31px] text-[59px]' />
							<div className='w-[59px] h-[24px] absolute top-[97px] left-[25px]'>
								Devices
							</div>
						</div>
					</Link>
				</div>
			</div>
			{/*Best Selling Products  */}
			<div className='w-[1308px] h-[518px] flex flex-col absolute top-[1868px] left-[135px] gap-[40px] '>
				<div className='w-[1170px] h-[108px] flex justify-between'>
					<div className='h-[103px] w-[600px]  flex flex-row gap-[87px]'>
						<div className='w-[400px] h-[108px] flex flex-col gap-[24px]'>
							<div className=' flex flex-row gap-[16px]  w-[125px] h-[40px]'>
								<div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'></div>
								<div className='h-[40px] w-[89px] text-[16px] font-[600] leading-[48px] text-[#DB4444]'>
									This Month
								</div>
							</div>
							<div className='font-[600] text-[36px] leading-[48px] tracking-[4%] '>
								<h4>Best Selling Products</h4>
							</div>
						</div>
					</div>
					<div className='w-[100px] h-[46px] flex flex-row gap-[8px] relative top-[54%] '>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]   rounded-[50%]'>
							<GoArrowLeft className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px] left-[11px] text-[2px]' />
						</div>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]    rounded-[50%] '>
							<GoArrowRight className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px]  text-[2px]' />
						</div>
					</div>
				</div>
				<div className='w-[1308px] h-[370px] overflow-x-scroll   flex flex-row gap-[16px]'>
					{Bests}
				</div>
			</div>

			<hr className='w-[1170px] absolute top-[1335px] left[1305px] ml-[135px] ' />
			<div className='w-[1170px] h-[500px] absolute top-[2526px] left-[135px] bg-black'>
				<div className='w-[90px] h-[20px] relative top-[69px] left-[56px] text-[#00FF66] font-[600] text-[16px] leading-[20px]'>
					Categories
				</div>
				<div className='w-[443px] h-[120px] relative top-[121px] left-[56px] text-white text-[48px] font-[600] leading-[60px] tracking-[4%] '>
					Enhance Your Music Experience
				</div>
				<div className='w-[320px] h-[62px] absolute top-[273px] left-[6px] flex flex-row gap-[24px]'>
					<div className='w-[450px] relative left-[60px] h-[65px] rounded-[5px] bg-white p-[10px]'>
						{countdownTimer2}
					</div>
					<button className='bg-[#00FF66] h-[56px] w-[171px] absolute top-[145px] left-[56px] text-white rounded-[4px] hover:bg-transparent hover:border border-[#00FF66] '>
						Buy Now
					</button>
				</div>
				<div className='w-[600px] h-[420px]  top-[-97px] left-[526px]  relative'>
					<img
						className='absolute top-[-85px]'
						src='https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png'
						alt=''
					/>
				</div>
			</div>
			{/* New Arrival */}
			<div className='w-[1308px] h-[768px] flex flex-col absolute top-[3097px] left-[135px] gap-[60px] '>
				<div className='w-[1170px] h-[108px] flex justify-between'>
					<div className='h-[103px] w-[600px]  flex flex-row gap-[87px]'>
						<div className='w-[400px] h-[108px] flex flex-col gap-[24px]'>
							<div className=' flex flex-row gap-[16px]  w-[125px] h-[40px]'>
								<div className='bg-[#DB4444] h-[40px] w-[20px] rounded-md'></div>
								<div className='h-[40px] w-[89px] text-[16px] font-[600] leading-[48px] text-[#DB4444]'>
									Featured
								</div>
							</div>
							<div className='font-[600] text-[36px] leading-[48px] tracking-[4%] '>
								<h4>New Arrival</h4>
							</div>
						</div>
					</div>
					<div className='w-[100px] h-[46px] flex flex-row gap-[8px] relative top-[54%] '>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]   rounded-[50%]'>
							<GoArrowLeft className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px] left-[11px] text-[2px]' />
						</div>
						<div className='w-[46px] h-[46px] bg-[#F5F5F5]    rounded-[50%] '>
							<GoArrowRight className='bg-[#F5F5F5]  w-[24px] h-[24px] absolute top-[11px]  text-[2px]' />
						</div>
					</div>
				</div>
				{/* New Arrival */}
				<div className='flex flex-row gap-[30px] w-[1170px] h-[600px] '>
					<div className='w-[570px] h-[600px] relative bg-[#000000f6]'>
						<img
							className='w-[511px] h-[511px] absolute top-[89px] left-[29px]'
							src='https://nl.letsgodigital.org/uploads/2020/10/ps5-slim-goedkope-playstation.jpg'
							alt=''
						/>
						<div className='flex flex-col gap-[16px] absolute top-[360px] left-[32px]'>
							<div className='text-white font-[600] text-[24px] leading-[] '>
								Play Station 5
							</div>
							<div className='text-[#FAFAFA] w-[242px] h-[42px] text-[14px] font-[400] leading-[21px]'>
								Black and White version of the PS5 coming out on
								sale.
							</div>
							<div className='text-white w-[81px] h-[24px] text-[16px] font-[500] leading-[24px]  border-b-[1.5px] border-[rgba(150,150,150,0.5)]  '>
								Shop Now
							</div>
						</div>
					</div>
					<div className='flex flex-col w-[570px] h-[600px]'>
						<div className='w-[570px] h-[286px] rounded-[4px] relative bg-[#000000f6]'>
							<img
								className='w-[432px] h-[286px] absolute left-[137px] '
								src='https://img.freepik.com/premium-photo/attractive-woman-wearing-hat-posing-black-background_7502-4861.jpg'
								alt=''
							/>
							<div className='flex flex-col gap-[32px] relative top-[138px] left-[24px]  '>
								<div className='flex flex-col gap-[16px]'>
									<div className='text-white w-[255px] h-[24px] font-[600] text-[24px] leading-[24px] tracking-[3%]  '>
										Women’s Collections
									</div>
									<div className='text-[#FAFAFA] w-[255px] h-[42px] text-[14px] font-[400] leading-[21px]'>
										Featured woman collections that give you
										another vibe.
									</div>
									<div className='w-[81px] h-[24px] text-[16px] font-[500] leading-[24px] text-[#FFFFFF] border-b-[1.5px] border-[rgba(150,150,150,0.5)]  '>
										Shop Now
									</div>
								</div>
							</div>
						</div>

						<div className='flex flex-row gap-[30px] w-[570px] h-[284px] bg-white absolute bottom-0 '>
							<div className='w-[270px] h-[284px] bg-[#000000f6] relative'>
								<img
									src='https://img.freepik.com/premium-photo/black-unbranded-cosmetic-serum-with-silver-tree-branch-skin-care-product-presentation-black-background-elegant-mockup-skincare-beauty-spa_429124-756.jpg'
									alt=''
								/>
								<div className='flex flex-col gap-[8px] absolute top-[165px] left-[24px] '>
									<div className='text-white w-[255px] h-[24px] font-[600] text-[24px] leading-[24px] tracking-[3%]  '>
										Serum
									</div>
									<div className='text-[#FAFAFA] w-[255px] h-[42px] text-[14px] font-[400] leading-[21px]'>
										Featured collections that give you a
										gorgeous skin tone
									</div>
									<div className='w-[81px] h-[24px] text-[16px] font-[500] leading-[24px] text-[#FFFFFF] border-b-[1.5px] border-[rgba(150,150,150,0.5)]  '>
										Shop Now
									</div>
								</div>
							</div>
							<div className='w-[270px] h-[284px] bg-black relative'>
								<img src='https://cdn.salla.sa/qdgeZ/TXXixmvFDM0kQTw89JjJaqk5ogl70KcvuuGBqN8x.jpg' />
								<div className='flex flex-col gap-[8px] absolute top-[175px] left-[24px]  '>
									<div className='text-white w-[255px] h-[24px] font-[600] text-[24px] leading-[24px] tracking-[3%]  '>
										Perfume
									</div>
									<div className='text-[#FAFAFA] w-[255px] h-[42px] text-[14px] font-[400] leading-[21px]'>
										GUCCI INTENSE OUD EDP
									</div>
									<div className='w-[81px] h-[24px] text-[16px] font-[500] leading-[1px] text-[#FFFFFF] border-b-[1.5px] border-[rgba(150,150,150,0.5)]  '>
										Shop Now
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-[943px] h-[161px] top-[3600px] left-[249px] flex flex-row relative gap-[88px]'>
				<div>
					<div className='w-[80px] h-[80px] rounded-[50%] bg-gray-300 absolute left-4 top-[-100px]'>
						<FaTruckFast className='text-center text-[46px] absolute left-[15px] top-[21px]' />
					</div>
					<div className='w-[275px] h-[161pxpx]'>
						<div className='w-[249px] h-[28px] font-[600] text-[16px] leading-[28px]'>
							FREE AND FAST DELIVERY
						</div>
						<div className='w-[275px] h-[21px] font-[400] leading-[21px] text-[center] tracking-[]20px-'>
							Free delivery for all orders over $140
						</div>
					</div>
				</div>

				<div className='w-[275px] h-[161px]'>
					<div className='w-[249px] h-[28px] font-[600] text-[16px] leading-[28px]'>
						24/7 CUSTOMER SERVICE
					</div>
					<div className='w-[275px] h-[21px] font-[400] leading-[21px] text-[center]'>
						Friendly 24/7 customer support
					</div>
				</div>
				<div className='w-[80px] h-[80px] rounded-[50%] bg-gray-300 absolute left-[410px] top-[-100px]'>
					<RiCustomerService2Fill className='text-center text-[46px] absolute left-[15px] top-[21px] ' />
				</div>

				<div className='w-[275px] h-[161px]'>
					<div className='w-[249px] h-[28px] font-[600] text-[16px] leading-[28px]'>
						MONEY BACK GUARANTEE
					</div>
					<div className='w-[275px] h-[21px] font-[400] leading-[21px] text-[center] tracking-[]20px-'>
						We reurn money within 30 days
					</div>
					<div className='w-[80px] h-[80px] rounded-[50%] bg-gray-300 absolute left-[770px] top-[-100px]'>
						<IoShieldCheckmark className='text-center text-[46px] absolute left-[15px] top-[21px] ' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
