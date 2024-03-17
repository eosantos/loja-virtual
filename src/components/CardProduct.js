// Card.js
import Image from 'next/image'

const Card = ({ src, title, price }) => {
  // Limitar o título a três palavras
  const truncatedTitle = title.split(' ').slice(0, 2).join(' ')

  return (
    <div className="max-w-[350px] h-[450px] flex items-center justify-center">
      <div className="max-w-xs relative rounded-lg overflow-hidden shadow-lg m-10 flex flex-col">
        {' '}
        {/* Classe rounded-lg adicionada para bordas mais arredondadas */}
        <div className="w-[250px] h-[250px] relative">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="w-full h-full"
          />
        </div>
        <div className="px-6 py-4 flex-grow flex items-center justify-center flex-col">
          <div
            className="font-bold text-base mb-2"
            style={{ fontSize: '16px' }}
          >
            {truncatedTitle}
          </div>
          <p className="text-gray-700 text-base">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
