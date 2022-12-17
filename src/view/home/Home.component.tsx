import React, { useState } from 'react'
import { Link, Route, Router } from 'react-router-dom'
import SCREEN_PATH_CODE from 'utils/enums/routes.enum'

function HomeComponent() {
  const cardData = [
    {
      id: '123321',
      title: 'Learning Rust',
      description:
        'A quick primer on Rust fundamentals for experienced programmers.',
      url: 'https://blog.desdelinux.net/wp-content/uploads/2018/07/Rust-1.jpg',
    },
    {
      id: '222211',
      title: 'Learning React',
      description:
        'In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries.',
      url: 'data:image/png;base64,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',
    },
    {
      id: '332211',
      title: 'Learning Solona',
      description:
        'Learn about Solana Blockchain with One Course! Master Web3, DApps, NFTs, DeFi,.. on Solana chain!',
      url: 'https://cloudoki.com/content/images/2022/11/Learning-Curve-for-Solana.png',
    },
  ]

  const renderCard = (
    id: string,
    title: string,
    description: string,
    url: string,
  ) => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-[350px] mx-4  ">
        <Link to={`${SCREEN_PATH_CODE.COURSE}/${id}`}>
          <img className="rounded-t-lg w-[100%] h-[60%]" src={url} alt="" />
        </Link>
        <div className="p-5">
          <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h6>
          <p className="mb-3 text-md text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <h1 className='mx-8 mt-10 text-2xl'>Search</h1>
      
      <div className='mx-7 mt-4 text-2xl mb-10 w-2/3'>
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find course, solutions and more..." required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cardData.map(({ id, title, description, url }, index) => (
            <div key={index}>{renderCard(id, title, description, url)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
