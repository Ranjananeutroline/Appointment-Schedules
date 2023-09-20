import React from 'react'



const OfferModal = () => {
  return (
    <div className='info-main-modal'>
    <div className='w-[450px]  bg-[white] rounded-[10px] offer-info-modal'>
      <div className='w-[450px] h-[60px] bg-[#83aab1]  rounded-t-[10px] flex items-center justify-center offer-info-modal'>
        <h1 className='text-[20px] text-white'>20% off for 30 min consultant</h1>
      </div>
      {/* <div className='w-[450px] h-[60px] flex py-5 px-4 justify-between'>
        <p className='text-[#3A4DF8] font-[500]'>June 15 - 16</p>
        <p className='text-[#3A4DF8] font-[500]'>5:00 - 17:00</p>
        
      </div> */}
      <div className='h-[120px] mx-4 rounded-[9px] flex items-center justify-center px-5 my-0 text-offer-info'>
        <p className='text-[16px]'>Take advantage of our limited-time offer. Get a 20% discount on a one-hour consultation between June 1 and June 5.</p>

      </div>
      <div className='w-[450px] h-[60px]  flex px-4 mx-5 pb-7 pt-2 gap-2 offer-valid-div'>
      <p className='font-normal'>Valid:</p>
        <p className='text-[#3A4DF8] font-[500]'>June 15 - 16,</p>
        <p className='text-[#3A4DF8] font-[500]'>5:00 - 17:00</p>
        
      </div>
      {/* <div className='flex  h-[45px] mt-3 gap-3 justify-end px-4 '>
        <button
              type="submit"
              className="bg-[#0AA1DD] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
              style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
            >
              Edit
            </button>
            <button
              type="submit"
              className="bg-[#f1f1f1] text-[black] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
              style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
            >
              Cancel
            </button> </div>  */}

      
    </div>
    </div>
  )
}

export default OfferModal
