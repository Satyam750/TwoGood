import React from 'react'

const Footer = () => {
    return (
        <>
        <div className='bg-black h-[0.5vh] w-[100%] absolute top-[360vw]'></div>
        <div id='footer' className='mt-[16vw] flex justify-between pl-[1.3vw] pr-[1.3vw]'>
            <div>
                <ul className='list-none text-lg font-semibold text-gray-500'>
                    CONNECT WITH US
                    <li >Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div>
                <h1 className='font-extrabold text-[10vw] mt-[-3vw]'>S.R</h1>
            </div>
            <div>
                <ul className='list-none text-lg font-semibold text-gray-500'>
                    THE NITTY GRITTIES
                    <li>Good Things FAQs
                    </li>
                    <li>Good Food FAQs</li>
                    <li>Good Places</li>
                    <li>Pathways</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Footer