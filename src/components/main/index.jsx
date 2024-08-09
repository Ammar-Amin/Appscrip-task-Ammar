"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/main/ProductCard'

const Main = () => {

    let [showFilter, setShowFilter] = useState(false)
    let [filters, setFilters] = useState([
        {
            title: "Ideal for",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
        {
            title: "Occasion",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
        {
            title: "Work",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
        {
            title: "Fabric",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
        {
            title: "Segment",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
        {
            title: "Suitable for",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
        {
            title: "Raw Materials",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
        {
            title: "Pattern",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ]
        },
    ])
    let [loading, setLoading] = useState(false)
    let [products, setProducts] = useState([])

    let obj = {
        title: "Ideal for",
        option: [
            { Men: false },
            { Women: false },
            { Kids: false },
        ]
    }

    async function fetchProducts() {
        setLoading(true)
        try {
            let res = await fetch('https://fakestoreapi.com/products')
            let json = await res.json()
            setProducts(json)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    function handleSelectAll(idx) {
        // Create a deep copy of the object you want to modify
        let tmp = { ...filters[idx] };

        // Map through the options and set all keys to true
        tmp.option = tmp.option.map(elem => {
            let newElem = {};
            Object.keys(elem).forEach(key => {
                newElem[key] = true;
            });
            return newElem;
        });
        // console.log(tmp.option)

        // Update the state with the new object
        setFilters(prev => {
            // Create a copy of the previous state array
            let newFilters = [...prev];

            // Replace the modified object at the correct index
            newFilters[idx] = tmp;

            return newFilters;
        });
    }

    function handleUnselectAll(idx) {
        let tmp = { ...filters[idx] }

        tmp.option = tmp.option.map((elem) => {
            let newElem = {};
            Object.keys(elem).forEach((key) => {
                newElem[key] = false
            })
            return newElem;
        })
        // console.log(tmp.option)

        setFilters(prev => {
            let newFilter = [...prev]

            newFilter[idx] = tmp;

            return newFilter
        })
    }

    if (loading) {
        return (<div className='w-full min-h-[600px] relative'>
            <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <div className="loader">
                    <div className="justify-content-center jimu-primary-loading"></div>
                </div>
            </div>
        </div>)
    }

    return (
        <div className='w-full max-w-[95rem] mx-auto'>
            <div className='my-8 p-4 md:px-10 flex justify-between items-center uppercase border-t-[1px] border-b-[1px] border-slate-400'>
                <span onClick={() => setShowFilter(!showFilter)} className='w-full hover sm:w-1/2 text-center hover md:hidden'>filter</span>
                <span onClick={() => setShowFilter(!showFilter)} className='hidden hover text-left md:block'>show filter</span>
                <span className='w-[2px] h-[26px] bg-black md:hidden'></span>
                <select className='uppercase text-right hover'>
                    <option value='recommended'>recommended</option>
                    <option value='newest first'>newest first</option>
                    <option value='popular'>popular</option>
                    <option value='high to low'>price: high to low</option>
                    <option value='low to high'>price: low to high</option>
                </select>
            </div>
            <div className='pb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                <div className={showFilter ? 'relative' : 'hidden'}>
                    {
                        showFilter && <div className='absolute md:static z-20 bg-white w-[150px] pl-3 md:w-[260px]'>
                            <div className='flex gap-3'>
                                <input type='checkbox' className='p-4 font-bold' />
                                <label className='uppercase'>customizable</label>
                            </div>
                            {
                                filters.length > 0 && filters.map((item, i) => <div key={i + item.title}
                                    className='p-4 border-b-[1px] border-slate-400'>
                                    <span className='text-xl font-bold hover'
                                        onClick={() => setFilters([...filters, item.show = !item.show])}
                                    >
                                        {item.title}
                                    </span>
                                    {
                                        item.show && <div className='flex flex-col gap-2 my-2'>
                                            <span className='hover' onClick={() => handleSelectAll(i)}>All</span>
                                            <span className='hover' onClick={() => handleUnselectAll(i)}>Unselect All</span>
                                            <ul>{item.option.map((elem) =>
                                                Object.keys(elem).map((key, i) => (
                                                    <li key={key + Date.now()}>
                                                        <input type="checkbox" defaultChecked={elem[key]} id={key + i} />
                                                        <label className='ml-3' htmlFor={key + i}>{[key][0]}</label>
                                                    </li>
                                                ))
                                            )}
                                            </ul>
                                        </div>
                                    }
                                </div>)
                            }
                        </div>
                    }
                </div>

                {/* Products  */}
                {
                    products.length > 0 && products.map((prod, i) => (
                        <ProductCard key={i} prod={prod} />
                    ))
                }
            </div>
        </div>
    )
}

export default Main
