"use client"

import React, { MouseEventHandler, useState } from "react"
import nav_logo from "../../public/navbar_icon.svg"
import nav_logo_mobile from "../../public/navbar_icon_mobile.svg"
import { IoSearch } from "react-icons/io5"
import { HiMenu } from "react-icons/hi"

import Image from "next/image"

const Navbar = () => {
  const [toggleHumbergerMenu, setToggleHumbergerMenu] = useState<boolean>(false)

  const handleToggleMenu: MouseEventHandler<HTMLElement> = () => {
    setToggleHumbergerMenu(!toggleHumbergerMenu)
  }

  return (
    <nav className="w-full h-14 flex justify-between items-center px-5 py-8 lg:py-0 lg:px-10 bg-[#032541]">
      <div className="flex items-center gap-x-5">
        {/* HAMBURGER MENU JUST ON MOBILE */}
        <div
          className="flex relative lg:hidden flex-col gap-y-1"
          onClick={handleToggleMenu}>
          <input
            type="checkbox"
            name="toggle-checkbox"
            id="toggle-checkbox"
            className="absolute top-0 bottom-0 left-0 right-0 opacity-0"
          />
          <HiMenu className="text-3xl text-white" />
        </div>

        <div className="hidden lg:flex flex-col w-36">
          <Image
            src={nav_logo}
            alt="nav logo"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <ul className="hidden lg:flex gap-x-5 text-white">
          <li className="font-semibold">Movies</li>
          <li className="font-semibold">Tv Show</li>
          <li className="font-semibold">People</li>
        </ul>
      </div>
      <div className="block lg:hidden w-14">
        <Image
          alt="logo nav mobile"
          src={nav_logo_mobile}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="block">
        <IoSearch className="text-2xl text-[#01b4e4] font-semibold" />
      </div>
    </nav>
  )
}

export default Navbar
