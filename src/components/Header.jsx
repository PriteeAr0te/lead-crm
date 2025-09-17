import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-screen py-3 px-3 sm:px-4 md:px-6 xl:px-8 flex justify-between items-center border-b border-[#EDEAF1] relative z-50">
            <div className="w-[160px] sm:w-[200px]">
                <img src={Logo} alt="CRM Logo" className="object-contain" />
            </div>

            <div className="flex gap-8 xl:gap-10 items-center">
                <nav className="hidden lg:flex gap-4 items-center">
                    <a
                        href="#"
                        className="flex gap-1 items-center text-nav hover:text-primary transition-colors duration-300 ease-in-out"
                    >
                        <span>Product</span>
                        <ChevronDown size={20} />
                    </a>
                    <a
                        href="#"
                        className="flex gap-1 items-center text-nav hover:text-primary transition-colors duration-300 ease-in-out"
                    >
                        <span>Pricing</span>
                    </a>
                    <a
                        href="#"
                        className="flex gap-1 items-center text-nav hover:text-primary transition-colors duration-300 ease-in-out"
                    >
                        <span>Resources</span>
                        <ChevronDown size={20} />
                    </a>
                    <a
                        href="#"
                        className="flex gap-1 items-center text-nav hover:text-primary transition-colors duration-300 ease-in-out"
                    >
                        <span>Company</span>
                        <ChevronDown size={20} />
                    </a>
                </nav>

                <div className="hidden md:flex gap-2 items-center">
                    <button className="btn-primary capitalize font-normal px-4 py-2 text-white cursor-pointer">
                        Get Your Free Account
                    </button>

                    <button className="flex gap-2 items-center px-4 py-2 border border-primary rounded-md text-primary cursor-pointer">
                        <LogIn size={20} />
                        <span>Login</span>
                    </button>
                </div>
                <button
                    className="lg:hidden flex items-center text-primary"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </div>


            <div
                className={`fixed inset-0 h-full w-full bg-black/50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            >
                <aside
                    className={`absolute top-0 right-0 h-full sm:w-[70%] md:w-[50%] lg:w-[40%] bg-white shadow-lg p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between gap-2 items-center">
                        <div className="w-[160px] sm:w-[200px]">
                            <img src={Logo} alt="CRM Logo" className="object-contain" />
                        </div>
                        <button
                            className="text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={28} />
                        </button>
                    </div>


                    <nav className="flex flex-col gap-4 mt-4">
                        <a href="#" className="flex gap-1 items-center text-nav hover:text-primary">
                            Product <ChevronDown size={20} />
                        </a>
                        <a href="#" className="text-nav hover:text-primary">
                            Pricing
                        </a>
                        <a href="#" className="flex gap-1 items-center text-nav hover:text-primary">
                            Resources <ChevronDown size={20} />
                        </a>
                        <a href="#" className="flex gap-1 items-center text-nav hover:text-primary">
                            Company <ChevronDown size={20} />
                        </a>
                    </nav>

                    <div className="md:hidden sm:flex flex-col gap-3 mt-20">
                        <button className="btn-primary capitalize font-normal px-4 py-2 text-white cursor-pointer">
                            Get Your Free Account
                        </button>
                        <button className="md:hidden sm:flex gap-2 items-center px-4 py-2 border border-primary rounded-md text-primary cursor-pointer">
                            <LogIn size={20} />
                            <span>Login</span>
                        </button>
                    </div>
                </aside>
            </div>
        </header>
    );
};

export default Header;
