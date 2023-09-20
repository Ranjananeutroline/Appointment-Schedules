import React from "react";

const AnnounceModal = () => {
  return (
    <div className="w-[450px] bg-[white] rounded-[10px] announce-info-modal">
      <div className="w-[450px] h-[60px] bg-[#84aedd] rounded-t-[10px] flex items-center justify-center announce-info-modal">
        <h1 className="text-[20px] text-white">ANNOUNCEMENT</h1>
      </div>
      <div className="h-[160px]  mx-4 rounded-[9px] flex items-center justify-center px-5 my-0 text-announce-info">
        <p className="text-[16px]  flex flex-wrap text-justify">
          We wanted to take a moment to inform you that we will be embarking on
          a well-deserved vacation in June 2021. We will be stepping away from
          the office to recharge and indulge in quality moments with our loved
          ones.
        </p>
      </div>
      <div className="w-[450px]  flex px-4 mx-5 pb-7 pt-2 announce-valid-div">
      <p className='font-normal'>Valid:</p>
        <p className="text-[#3A4DF8] font-[500] mx-3">June 15 - 16</p>
      </div>
      {/* <div className="flex  h-[45px] mt-5 gap-3 justify-end px-5 mx-4 ">
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
        </button>{" "}
      </div> */}
    </div>
  );
};

export default AnnounceModal;
