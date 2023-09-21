import { ProductType } from '@/types/product.type';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

export default function Product({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}: ProductType) {
  return (
    <div className="flex flex-col md:flex-row gap-4 border-b-2 p-4 w-full">
      <div className="">
        <Image
          src={thumbnail}
          alt={title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-start">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl text-primary-content">{title}</h3>
          <div className="flex gap-2 flex-wrap">
            <p className="bg-green-600 text-white whitespace-nowrap p-1 rounded-md text-sm h-min flex items-center">
              {rating} <AiFillStar />
            </p>
            <p className="bg-accent-focus rounded-md p-1 text-white text-sm h-min">
              {brand}
            </p>
            <p className="bg-neutral rounded-md p-1 text-white text-sm h-min">
              {category}
            </p>
            <p className="bg-info-content rounded-md p-1 text-white text-sm h-min">
              {' '}
              <span>{stock} items left</span>
            </p>
          </div>
          <p className="break-word">{description}</p>
        </div>
        <div className=" flex flex-col items-end">
          <h1 className="text-2xl font-bold text-secondary-content">
            ${price}
          </h1>
          <p className="text-green-500 text-sm">
            {Math.floor(discountPercentage)}% off
          </p>
        </div>
      </div>
    </div>
  );
}
