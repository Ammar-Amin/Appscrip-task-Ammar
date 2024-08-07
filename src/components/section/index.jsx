import React from 'react'

const Section = () => {
    return (
        <section>
            <div className='flex items-center gap-3 p-3 md:hidden'>
                <span>HOME</span>
                <span className='w-[1px] h-[16px] bg-black'></span>
                <span>SHOP</span>
            </div>
            <div className='max-w-[721px] mx-auto md:py-14'>
                <h1 className='py-2 text-2xl md:text-5xl font-medium uppercase text-center'>Discover our products</h1>
                <p className='md:w-[90%] mx-auto text-center px-3 md:pt-4'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus sceleris mi ut elementum  Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </section>
    )
}

export default Section
