import React from 'react'

const HomeBar = () => {
    return (
        <nav className='w-screen h-[80px] bg-[#FEFEFE]'>
            <div className='md:px-[72px]'>
                <div className='h-[80px] flex justify-between items-center'>
                    <div>
                        <h1 className='not-italic font-bold text-[35px]'>
                            LOGO
                        </h1>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HomeBar