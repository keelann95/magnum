/** @format */
// import React from "react";
// import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import SignUpForm from "./components/SignUpForm";

import { Route, Router, Routes } from "react-router-dom";
import BeautyFetch from "./components/BeautyFetch";
import WomenFetch from "./components/WomenFetch";
import HomeEquipments from "./components/HomeEquipments";
import MensCategories from "./components/MensCategories";
import Wishlist from "./components/Wishlist";
import KitchensFetch from "./components/KitchensFetch";
import WatchFetch from "./components/WatchFetch";
import DeviceFetch from "./components/DeviceFetch";
//This a count-down Library snippet...DON'T EDIT!!!!!!

const Completionist = () => <span>Time&#39;s up!</span>;

// Renderer callback with conditionals
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completion message
    return <Completionist />;
  } else {
    // Render the countdown
    return (
      <div className="flex flex-row  relative left-[-20px]">
        <div className="h-[50px] w-[46px] gap-[4px] absolute left-[20px]">
          <div className="text-[12px]">Days</div>
          <p className="text-[32px] leading-[30px] font-[700] tracking-[4%]">
            {days}
          </p>
        </div>
        <div className="flex flex-col gap-[8px] w-[4px] h-[16px] absolute top-[26px] left-[63px]   ">
          <div className="w-[4px] h-[4px] bg-[#E07575]"></div>
          <div className="w-[4px] h-[4px] bg-[#E07575]"></div>
        </div>

        <div className="h-[50px] w-[42px] gap-[4px] absolute left-[84px]">
          <div className="text-[12px]">Hours</div>
          <p className="text-[32px] leading-[30px] font-[700] tracking-[4%]">
            {hours}
          </p>
        </div>

        <div className="flex flex-col gap-[8px] w-[4px] h-[16px] absolute top-[26px] left-[143px]   ">
          <div className="w-[4px] h-[4px] bg-[#E07575]"></div>
          <div className="w-[4px] h-[4px] bg-[#E07575]"></div>
        </div>

        <div className="h-[50px] w-[49px] gap-[4px] absolute left-[164px] ">
          <div className="text-[12px]">Minutes</div>
          <p className="text-[32px] leading-[30px] font-[700] tracking-[4%]">
            {minutes}
          </p>
        </div>

        <div className="flex flex-col gap-[8px] w-[4px] h-[16px] absolute top-[26px] left-[230px]  ">
          <div className="w-[4px] h-[4px] bg-[#E07575]"></div>
          <div className="w-[4px] h-[4px] bg-[#E07575]"></div>
        </div>

        <div className="h-[50px] w-[51px] gap-[4px] absolute left-[251px]">
          <div className="text-[12px]">Seconds</div>
          <p className="text-[32px] leading-[30px] font-[700] tracking-[4%]">
            {seconds}
          </p>
        </div>
      </div>
    );
  }
};

function App() {
	const countdownTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
	const countdownTimer = (
		<Countdown date={countdownTime} renderer={renderer} />
	);
	const countdownTime2 = Date.now() + 24 * 24 * 60 * 60 * 1000;
	const countdownTimer2 = (
		<Countdown date={countdownTime2} renderer={renderer} />
	);
	return (
		<>
			<NavBar />

			<Routes>
				<Route
					path='/'
					element={
						<Home
							countdownTimer={countdownTimer}
							countdownTimer2={countdownTimer2}
						/>
					}
				/>
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/signup' element={<SignUpForm />} />
				<Route path='/beautyFetch' element={<BeautyFetch />} />
				<Route path='/womenFetch' element={<WomenFetch />} />
				<Route path='/homeEquipments' element={<HomeEquipments />} />
				<Route path='/mensCategories' element={<MensCategories />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/kitchensFetch' element={<KitchensFetch />} />
				<Route path='/watchFetch' element={<WatchFetch />} />
				<Route path='/deviceFetch' element={<DeviceFetch />} />
			</Routes>
		</>
	);
}

export default App;
