import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Button = () => {
  return (
    <div>
      <button className='flex h-10 mt-5 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
        Se connecter 
        <ArrowRightIcon className='ml-auto h-5 text-gray-50 w-5 md:w-6'/>
      </button>
    </div>
  )
}

export default Button
