import React from 'react'

function Note(props) {
  return <div className='bg-gray-50 h-[200px] w-full sm:w-1/2 m-2 p-4 shadow-lg rounded-sm'>
    <h1 className='shadow p-2 rounded h-[20%] font-bold text-gray-500'>{props.Title}</h1>
    <p className='shadow p-2 text-start rounded h-[65%] text-gray-500 text-wrap overflow-hidden'>{props.Content}</p>
    <button className='text-yellow-500 text-sm h-[15%] font-semibold px-3 my-2 border rounded shadow-sm'>Delete</button>
  </div>
}

export default Note;