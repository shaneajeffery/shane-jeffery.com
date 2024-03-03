import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import logo from '../assets/images/logo/logo.png'
import AllData from 'src/hooks/all-data'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const { menuItem } = AllData()

    return (
        <div className="z-50 ">
            <div className="container">
                <header className="fixed left-0 top-0 z-[1111111111] flex w-full items-center justify-between lg:static  ">
                    <div className=" flex w-full justify-between bg-[#F3F6F6] px-4 dark:bg-black lg:bg-transparent lg:px-0 lg:dark:bg-transparent ">
                        <div className="my-5 flex w-full items-center justify-between space-x-4 lg:my-8 ">
                            <a className="text-5xl font-semibold" href="/">
                                {/* <img className="h-[26px] lg:h-[32px]" src={logo.src} alt="" /> */}
                            </a>
                            <div className="flex items-center">
                                {!menuOpen ? (
                                    <span
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="visible ml-3 flex h-[40px]  w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#ef4060] text-3xl text-white opacity-100 dark:text-white lg:invisible lg:opacity-0 "
                                    >
                                        <AiOutlineMenu />
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="visible ml-3 flex h-[40px] w-[40px]  cursor-pointer items-center justify-center rounded-full bg-[#ef4060] text-3xl text-white opacity-100 lg:invisible lg:opacity-0 "
                                    >
                                        <AiOutlineClose />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <nav
                        className={`${menuOpen ? 'block  dark:bg-black   ' : 'hidden lg:block'}`}
                    >
                        <ul
                            className={`${
                                menuOpen
                                    ? 'absolute left-0  top-20 z-[22222222222222] block w-full rounded-b-[20px] bg-white py-4 drop-shadow-lg dark:bg-[#1D1D1D] lg:hidden '
                                    : 'my-12 flex '
                            }`}
                        >
                            {menuItem.map((item) => (
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    key={item.id}
                                    className=" "
                                >
                                    <a
                                        className={`mx-2.5 flex  cursor-pointer items-center rounded-md bg-white from-theme1 to-theme2 py-2.5 font-poppins text-xtiny
                     font-medium text-gray-lite transition-all duration-300 ease-in-out hover:bg-gradient-to-r dark:bg-[#212425] dark:text-theme1  dark:hover:text-black md:px-4 xl:px-5 `}
                                        href={item?.link}
                                    >
                                        <span className="mr-2 text-xl">
                                            {item?.icon}
                                        </span>{' '}
                                        {item?.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header
