import React from 'react'
import Image from 'next/image'
import { CardProps } from '../../interfaces'
import Button from './Button'

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white">
      <Image src={imageUrl} alt={title} width={400} height={250} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button label="View Details" />
      </div>
    </div>
  )
}

export default Card
