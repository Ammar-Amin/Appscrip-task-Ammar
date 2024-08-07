import React from 'react'

const Section = () => {
    return (
        <section>
            <div className='flex items-center gap-3 p-3 md:hidden'>
                <span>HOME</span>
                <span className='w-[1px] h-[16px] bg-black'></span>
                <span>SHOP</span>
            </div>
            <h1 className='py-2 text-2xl font-medium uppercase text-center'>Discover our products</h1>
            <p className='text-center px-3'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus sceleris nibh amet mi ut elementum  Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </section>
    )
}

export default Section
