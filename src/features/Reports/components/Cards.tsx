import React from 'react'
interface CardProps{
    total:string,
    head:string,
    desc:string,
    icons: React.ElementType;

}
const Cards:React.FC<CardProps> = ({ total, head, desc, icons: Icon }) => {
  return (
    <div className='border-[#B8B8B8] mt-3 border-[1px] lg:w-[30%] sm:w-[100%] xs:w-[100%]  rounded-lg p-3 text-[#379996]'>
        {Icon && <Icon className='rounded-md border-[1px] border-[#379996] p-2' size={40} />}
        <h1 className='font-bold text-[20px] mt-2'>{total}</h1>
        <h5 className='font-semibold text-[13px]'>{head}</h5>
        <p className='text-[12px]'>{desc}</p>
    </div>
  )
}

export default Cards
