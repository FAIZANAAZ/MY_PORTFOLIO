import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-yellow-400 text-black p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#7d674c]'>{props.textName}</button>
    </>
  )
}

export default Button