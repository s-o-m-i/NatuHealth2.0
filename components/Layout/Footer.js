import React from 'react'

const Footer = () => {
    return (
        <div className='z-10 relative w-full   bg-white'>
            <div className="footer w-full  text-black">
                <div className="grid w-full sm:grid-cols-4 py-8 ">
                    <div className="box flex justify-center sm:justify-start text-[#5A63FE]">
                    <div className='flex flex-col sm:items-start items-center'>
                        <h1 className='font-bold  cursor-pointer text-[#5A63FE]'>Natu.Health</h1>
                        <div className='flex'>
                            <img className='mt-14 mr-4 cursor-pointer' src="/instagram-ic.png" alt="Instagram" />
                            <img className='mt-14 mr-4 cursor-pointer' src="/facebook-ic.png" alt="Facebook" />
                            <img className='mt-14 mr-4 cursor-pointer' src="/twitter-ic.png" alt="Twitter" />
                            <img className='mt-14 mr-4 cursor-pointer' src="/youtube-ic.png" alt="Youtube" />
                        </div>
                        <h4 className='mt-10 text-sm text-[#5A63FE]'>© Moon Rooster LLC. All rights reserved.</h4>
                        </div>
                    </div>
                    <div className="box-about mt-2 sm:mt-0 flex justify-center  text-[#5A63FE]">
                    <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start  '>

                        <h1 className='font-bold cursor-pointer'>About Us</h1>
                        <h5 className='text-base cursor-pointer mt-5'>About</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Careers</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Blog</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Legal & privacy</h5>
                    </div>

                    </div>

                    <div className="box-about mt-2 sm:mt-0 flex justify-center sm:flex sm:justify-end text-[#5A63FE]">
                    <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start  '>

                        <h1 className='font-bold'>Services</h1>
                        <h5 className='text-base cursor-pointer mt-5'>Applications</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Medical</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Affilliate</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Institutional Services</h5>
                    </div>

                    </div>
                    <div className="box-about mt-2 sm:mt-0  sm:flex justify-end mt text-[#5A63FE]">
                    <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start  '>

                        <h1 className='font-bold'>Learn</h1>
                        <h5 className='text-base cursor-pointer mt-5'>What is Medical?</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Natu Basic</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Tips and Tutorials</h5>
                        <h5 className='text-base cursor-pointer mt-5'>Market Update</h5>
                    </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer