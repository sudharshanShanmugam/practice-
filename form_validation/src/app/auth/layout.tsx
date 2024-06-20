import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className='w-full '>
        <div className=' flex items-center justify-center my-10'>
            {children}
        </div>
    </section>
  )
}

export default AuthLayout