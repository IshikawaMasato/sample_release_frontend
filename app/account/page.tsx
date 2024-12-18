import React from 'react'
import BottomAppBar from '../components/BottomAppBar'

const page = () => {
    return (
        <div>
            <h1 className='flex h-screen items-center justify-center font-bold text-4xl'>
                this is /account page !!
            </h1>
            <BottomAppBar />
        </div>
    )
}

export default page