'use client'
import { useFormStatus } from 'react-dom'

export const SendButton = () => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending} className='border w-36 ml-2 bg-white'>
      얍!🍀
    </button>
  )
}