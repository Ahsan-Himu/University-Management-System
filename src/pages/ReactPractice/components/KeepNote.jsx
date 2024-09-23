import React from 'react'

function KeepNote() {
    return (
        <div> <div className="m-5 md:m-8 p-4 h-auto w-100% sm:w-1/2 items-start bg-gray-50 shadow-xl border rounded-sm ">
           <input type="Text" placeholder='Title' className='px-2 mb-2 h-20px w-[100%] font-bold bg-inherit shadow rounded-sm' />
           <input type="textArea" placeholder='Content' className='px-2 h-[80px] w-[100%] bg-inherit text-start text-wrap shadow overflow-hidden rounded-sm' />
            <button  className='bg-gray-200 py-2 px-5 mt-2'>Add</button>
            </div>
    
        </div>
      )
}

export default KeepNote;