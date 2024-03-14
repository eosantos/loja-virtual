import logo from '../assets/icon/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="bg-red-50 ">
      <div className="max-w-7xl mx-auto">
        <header className="py-4 px-8 flex justify-between items-center">
          <div className="logo">
            <Image src={logo} alt="Store Logo" className="w-24" />
          </div>
          <nav className="nav hidden md:block  text-slate-950">
            <ul className="flex space-x-4">
              <li className="hover:text-red-500">
                <a href="/">Masculino</a>
              </li>
              <li className="hover:text-red-500">
                <a href="/">Feminino</a>
              </li>
              <li className="hover:text-red-500">
                <a href="/">Acessórios</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header
