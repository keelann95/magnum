import { BsQrCode } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  
  return (
    <div className="bg-black relative  mt-[3600px]">
      <footer className=" border-2 h-[40vh]">
        <div className="flex p-8 gap-3 md:p-[50px] lg:p-[90px] sm:p-[30px]">

          <div className=" h-[30vh] w-[20%] rounded-md flex flex-col items-start text-left p-4">
            <h1 className="text-[#FFFFFF] font-bold mb-3 w-full">Exclusive</h1>
            <h3 className="text-[#d5d9e0]">Subscribe</h3>
            <h5 className="text-[#a2a2a3] mt-2">Get 10% off your first order</h5>
            <div className="w-full mt-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-2 py-0.4 text-[13px] rounded-md"
              />
            </div>
          </div>

          <div className=" h-[30vh] w-[20%] rounded-md flex flex-col items-start text-left p-4">
            <h1 className="text-[#FFFFFF] font-bold mb-2 w-full">Support</h1>
            <h3 className="text-[#d5d9e0] mb-2">111 Bijoy sarani, Dhaka, Dh 15,Bangladesh.</h3>
            <h5 className="text-[#a2a2a3] text-[13.5px] mt-2">exclusively@gmail.com</h5>
            <h4 className="text-[#d5d9e0] text-[13px] mt-2">+88015-88888-9999</h4>
          </div>

          <div className=" h-[30vh] w-[20%] rounded-md flex flex-col items-start text-left p-4">
            <h1 className="text-[#FFFFFF] font-bold mb-2 w-full">Account</h1>
            <h3 className="text-[#d5d9e0] mb-1 text-[14px] mt-2">My Account</h3>
            <h3 className="text-[#a2a2a3] text-[14px] mt-1">Login / Register</h3>
            <h3 className="text-[#a2a2a3] text-[14px] mt-1">Cart</h3>
            <h3 className="text-[#a2a2a3] text-[14px] mt-1">WishList</h3>
            <h3 className="text-[#a2a2a3] text-[14px] mt-1">Shop</h3>
          </div>

          <div className=" h-[30vh] w-[20%] rounded-md flex flex-col items-start text-left p-4">
            <h1 className="text-[#FFFFFF] font-bold mb-2 w-full">Quick Link</h1>
            <h3 className="text-[#d5d9e0] mb-1 text-[14px] mt-2">Privacy Policy</h3>
            <h3 className="text-[#a2a2a3] text-[14px] mt-1">Terms Of Use</h3>
            <h3 className="text-[#a2a2a3] text-[14px] mt-1">FAQ</h3>
            <h3 className="text-[#a2a2a3] text-[14px] mt-1">Contact</h3>
          </div>

          
          <div className=" h-[30vh] w-[20%] rounded-md flex flex-col items-start text-left p-4">
            <h1 className="text-[#FFFFFF] font-bold mb-2 w-full">Download App</h1>
            <h7 className="text-[#a2a2a3] mb-1 text-[11px] mb-3 mt-2">Save $3 with App New User Only</h7>
            <div className="flex items-center justify-start gap-3 w-full">
              <div className="items-center justify-center text-center">
                <BsQrCode className="text-[60px] text-[#a2a2a3]" />
              </div>
              <div>
                <h3 className="text-[#a2a2a3] text-[14px]">Hello</h3>
              </div>
            </div>
            <div className="text-3xl text-white flex gap-2 mt-4">
              <CiFacebook className="hover:text-blue-300 cursor-pointer transition-colors duration-200" />
              <FaInstagram className="hover:text-pink-300 cursor-pointer transition-colors duration-200" />
              <FaWhatsapp className="hover:text-green-300 cursor-pointer transition-colors duration-200" />
              <CiLinkedin className="hover:text-blue-300 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
