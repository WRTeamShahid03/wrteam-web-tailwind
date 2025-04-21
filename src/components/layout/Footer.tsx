"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/images/footerLogo.svg";
import Link from "next/link";
import { BsArrowRightCircle, BsFillTelephoneFill } from "react-icons/bs";
import Newsletter from "../Newsletter";

const Footer = () => {
  return (
    <footer className="secondaryBg text-[#ffffff87] pt-10 relative mt-[100px] md:mt-[120px] lg:mt-[150px]">
      <div className="container">
        <Newsletter />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-12 md:pt-20 font-semibold">
          {/* Company Info */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <Link href={"/"}>
                <Image
                  src={logo}
                  width={0}
                  height={0}
                  className="w-[200px] xl:w-auto h-auto"
                  alt=""
                />
              </Link>
            </div>
            <p className="mt-4 leading-relaxed">
              WRTeam has a creative and dedicated group of developers who are
              masters in app development and Web development with a niche to
              deliver quality solutions to customers across the globe.
            </p>
            <div className="flex flex-col gap-4 mt-4 text-white">
              <span>Follow Us</span>
              <div className="flex gap-3">
                <Link
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_FACEBOOK!}
                  title="facebook"
                >
                  <FaFacebookF className="text-xl cursor-pointer transition-all duration-300 hover:primaryColor" />
                </Link>
                <Link
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_INSTAGRAM!}
                  title="instagram"
                >
                  <FaInstagram className="text-xl cursor-pointer transition-all duration-300 hover:primaryColor" />
                </Link>
                <Link
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_LINKEDIN!}
                  title="Linkedin"
                >
                  <FaLinkedinIn className="text-xl cursor-pointer transition-all duration-300 hover:primaryColor" />
                </Link>
                <Link
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_YOUTUBE!}
                  title="youtube"
                >
                  <FaYoutube className="text-xl cursor-pointer transition-all duration-300 hover:primaryColor" />
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu Links</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/about-us"
                  title="about-us"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/career"
                  title="career"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Career
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/contact-us"
                  title="contact-us"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/hire-us"
                  title="hire-us"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Hire Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/portfolio"
                  title="portfolio"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/services/web-development"
                  title="Web Development"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Web Development
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/services/app-development"
                  title="App Development"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  App Development
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/services/ui-ux-design"
                  title="UI/UX Design Service"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  UI/UX Design Service
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/services/digital-marketing"
                  title="Digital Marketing Service"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Digital Marketing Service
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/services/customization"
                  title="Customization"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Customization
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/services/installation"
                  title="Installation"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Installation
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/license"
                  title="License"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/products"
                  title="Web Products"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  Web Products
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/products"
                  title="App Products"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  App Products
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-[400]">
                  <BsArrowRightCircle />
                </span>
                <Link
                  href="/products"
                  title="Combo Products"
                  className="transition-all duration-300 hover:primaryColor hover:ml-1"
                >
                  App + Web (Combined)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <span className="bg-[#ffffff29] p-2 rounded-sm text-white">
                  <BsFillTelephoneFill size={22} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-white">Call</span>
                  <span>
                    <Link href={"tel:+91 97979 45459"} title="+91 97979 45459">
                      +91 97979 45459
                    </Link>
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#ffffff29] p-2 rounded-sm text-white">
                  <MdEmail size={22} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-white">Mail</span>
                  <span>
                    <Link
                      href={"mailto:support@wrteam.in"}
                      title="Support@wrteam.in"
                    >
                      Support@wrteam.in
                    </Link>
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#ffffff29] p-2 rounded-sm text-white">
                  <FaLocationDot size={22} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-white">Office Address</span>
                  <span>
                    #262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj -
                    Kutch 370001 Gujarat India.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#ffffff87] mt-8 py-6 text-sm flex items-center justify-between flex-wrap gap-y-4">
          <p>Copyright © WRTeam | Powered by WRTeam</p>
          <div className="flex items-center gap-1 flex-wrap">
            <Link
              href="/terms-of-use"
              title="Terms of Use"
              className="transition-all duration-300 hover:primaryColor"
            >
              Terms of Use
            </Link>
            <span>|</span>
            <Link
              href={"/privacy-policy"}
              title="Privacy Policy"
              className="transition-all duration-300 hover:primaryColor"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href={"/copyright-and-disclaimer"}
              title="Copyright & Disclaimer"
              className="transition-all duration-300 hover:primaryColor"
            >
              Copyright & Disclaimer
            </Link>
            <span>|</span>
            <Link
              href="/refund-policy"
              title="Refund Policy"
              className="transition-all duration-300 hover:primaryColor"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
