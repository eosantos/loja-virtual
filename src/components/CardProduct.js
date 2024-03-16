// Card.js
import Image from 'next/image'

const Card = ({ src, title, price }) => {
  return (
    <div className="flex items-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-10">
        <Image src={src} alt={title} width={280} height={200} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
