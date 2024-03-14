import React from 'react'

const AboutUs = () => {
  return (
    <>
    <div className='h-full '>
    <img className='h-40  w-full md:h-52 object-cover' src="./image/contactus.jpg" alt="" />
    <div className='md:top-36 top-28 md:left-16 left-5 text-white font-bold text-4xl absolute'>About Us</div>
    <div className='text-container flex items-center justify-center flex-col mt-10 mb-10  md:mt-20 md:mb-20'>
    <div className='flex flex-col w-4/5 md:w-8/12 justify-between text-justify' >
        <span className='font-bold text-xl mb-3'>ABOUT US</span>
        <p className='mb-2'>This group is the brainchild of professionals who during their years of interactions/ exposure in various capacities in the API, Nutrition and allied industry realized that a discerning buyer in industry requires, apart from cost effectiveness and reliable service, perpetual information about the latest innovations and all other developments/ happenings in the line. Founder's of this group are widely travelled, highly dedicated and focused persons.</p>
        <p className='mb-2'>They carefully collect all possible information and data like honey bees collecting the nectar to cater the need of the clients. The importance of this idea in this fast changing and competitive world cannot be overstated and the group with this deep conviction has been keeping close touch with all its client and sources. To sum up the group takes serious care about quality, pricing, packing and promptness in service through regular and active interactions.</p>
        <p>VYOMCHEM SPECIALTIES is a single stop source of best in class quality, reasonable pricing and unrivaled service.</p>
    </div>
    <div className='flex flex-col mt-5 w-4/5  md:w-8/12 justify-between text-justify' >
        <span className='font-bold text-xl mb-3'>PRINCIPLES</span>
        <p className='mb-2'>Speed & Integrity with commitment to excellence! Our specialty is our variety and availability of the most unique products in our category. We reach sources across the globe for the search of products best suitable for different permutation combination. Vyomchem Specialities is located in Baddi industrial area (H.P.) India with secure warehousing facility , however we supply across.</p>
        
    </div>
    <div className='flex flex-col mt-5 w-4/5 md:w-8/12 justify-between' >
        <span className='font-bold text-xl mb-3'>MARKET SEGMENTS</span>
        <p className='mb-2'>Cosmeceuticals</p>
        
    </div>
    </div>
        </div>
     
     </>
  )
}

export default AboutUs
