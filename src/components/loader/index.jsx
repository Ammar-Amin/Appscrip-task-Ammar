import React from 'react'

const Loader = () => {
    return (
        <div className='w-full min-h-[400px] relative'>
            <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <div className="loader">
                    <div className="justify-content-center jimu-primary-loading"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
