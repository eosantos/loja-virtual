'use client'

import logo from '../assets/icon/logo.svg'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  // Usando useState apenas dentro de um Client Component
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-red-50 relative">
      <div className="max-w-7xl mx-auto">
        <header className="py-4 px-8 flex justify-between items-center">
          <div className="logo">
            <Image src={logo} alt="Store Logo" className="w-24" />
          </div>
          <nav className="hidden md:flex space-x-4 text-slate-950">
            <ul className="flex">
              <li className="hover:text-red-500 m-2">
                <a href="/">Masculino</a>
              </li>
              <li className="hover:text-red-500 m-2">
                <a href="/">Feminino</a>
              </li>
              <li className="hover:text-red-500 m-2">
                <a href="/">Acessórios</a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              className=" text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </header>
        {/* Modal do menu abaixo do cabeçalho */}
        {menuOpen && (
          <div className="absolute top-full right-0 md:left-auto w-50 md:w-50 bg-white border border-gray-200 shadow-md md:relative">
            <nav className="px-8 py-4 text-slate-950">
              <ul className="flex flex-col space-y-4">
                <li className="hover:text-red-500 md:text-right">
                  <a href="/">Masculino</a>
                </li>
                <li className="hover:text-red-500 md:text-right">
                  <a href="/">Feminino</a>
                </li>
                <li className="hover:text-red-500 md:text-right">
                  <a href="/">Acessórios</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
