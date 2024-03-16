import logo from '../assets/icon/logo.svg'
import Image from 'next/image'
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer
      className="bg-stone-100 text-white py-6 px-8 absolute bottom-0 w-full"
      style={{ position: 'static' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <nav className="md:flex space-x-4 text-slate-950">
            <ul className="flex">
              <li className="hover:text-red-500 m-2 text-stone-900">
                <a href="/">Masculino</a>
              </li>
              <li className="hover:text-red-500 m-2 text-stone-900">
                <a href="/">Feminino</a>
              </li>
              <li className="hover:text-red-500 m-2 text-stone-900">
                <a href="/">Acessórios</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="m-5 text-stone-900 flex space-x-4">
          <BsInstagram className="hover:text-red-500" />
          <BsFacebook className="hover:text-red-500" />
          <BsLinkedin className="hover:text-red-500" />
          <BsYoutube className="hover:text-red-500" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo mb-6 md:mb-0">
          <Image src={logo} alt="Store Logo" className="w-24" />
        </div>

        <div>
          <p className="text-sm text-stone-900">
            © 2024 Irroba Virtual. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
