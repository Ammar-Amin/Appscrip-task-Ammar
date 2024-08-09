"use client"
import { Loader } from '@/components'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductPage = () => {

    let { id } = useParams()
    let [product, setProduct] = useState(null)
    let [loading, setLoading] = useState(true)

    async function getProd() {
        try {
            let res = await fetch(`https://fakestoreapi.com/products/${id}`)
            let data = await res.json()
            // console.log(data)
            setProduct(data)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProd()
    }, [])

    if (loading) return <Loader />

    return (
        <>
            {product &&
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-6">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-72 md:h-96 rounded-lg border border-slate-900">
                                <img src={product.image} alt={product.image} className='mt-3 md:mt-6 mx-auto h-64 md:h-80 object-cover' />
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:flex-1 px-4">
                            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                                {product.title}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Category : {" "}
                                <a href="#" className="text-indigo-600 hover:underline">
                                    {product.category}
                                </a>
                            </p>
                            <div className="flex items-center space-x-4 my-4">
                                <div>
                                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                        <span className="text-indigo-400 mr-1 mt-1">$</span>
                                        <span className="font-bold text-indigo-600 text-3xl">{product.price}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                                    <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                                </div>
                            </div>
                            <p className="text-gray-500">
                                {product.description}  </p>
                            <div className='flex py-4 space-x-3'>
                                <div className="relative">
                                    <div className="text-center left-2 pt-2 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                                        Qty
                                    </div>
                                    <select className="cursor-pointer appearance-none rounded-lg border border-gray-700 pl-12 pr-8 h-8 flex items-end pb-1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <svg
                                        className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <button
                                    type="button"
                                    className="h-14 px-6 py-1 rounded-full border border-slate-700 bg-yellow-400 hover:bg-yellow-500"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    type="button"
                                    className="h-14 px-6 py-1 rounded-full border border-slate-700 bg-orange-400 hover:bg-orange-500"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Link href="/">
                <button className='mb-10 block mx-auto px-10 py-3 bg-blue-500 text-white rounded-xl'>
                    Back to Home page
                </button>
            </Link>
        </>
    )
}

export default ProductPage
