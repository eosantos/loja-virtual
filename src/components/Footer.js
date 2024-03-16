import logo from '../assets/icon/logo.svg'
import Image from 'next/image'

// Definindo o componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-8 absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Menu vertical */}
        <nav className="flex flex-col space-y-4">
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

        {/* Logotipo */}
        <div className="logo">
          <Image src={logo} alt="Store Logo" className="w-24" />
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm">
            © 2024 Irroba. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Exportando o componente Footer
export default Footer
