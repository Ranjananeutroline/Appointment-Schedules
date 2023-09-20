import React, {useState} from 'react'
import radio from "../../assets/radio1.png";
import right from "../../assets/right.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import edit from "../../assets/edit2.png";
import trash from "../../assets/trash2.png";
import AnnounceModal from './AnnounceModal';
import "./announcemodal.css"
import info from "../../assets/info.svg";
import "./OfferPage.css";

const Annouce = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
      setModalOpen(true);
    };
    const onCloseModal = () => setModalOpen(false);
  return (
  
          <div className=" flex flex-wrap gap-8 announce-details">
             <Modal
        open={modalOpen}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customButton",
        }}
      >
        <AnnounceModal />
      </Modal>
          {/* <div>
          {activeTab === "today" && <Today />}
          {activeTab === "upcoming" && <Upcoming />}
          {activeTab === "completed" && <Completed />}
          {activeTab === "total" && <Total />}
        </div> */}
          <div className="w-[450px] h-[180px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#9ac9f5] rounded-t-[7px] flex items-center justify-center announce-box-title">
              <h2 className="text-white text-[17px] font-[600]">20% off for 30 min consultant</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] justify-between inner-a-box">
              <div className='flex items-center gap-3 second-a-box'>
              <img src={radio} alt="radio" className="w-[12px] h-[12px] mb-[20px]" />
              <p className="text-[15px] a-left-p">Get a 20% discount on a one-hour consultation between June 15 and June 16.</p>
              <div>
              <img src={info} alt="right" className="w-[16px] h-[16px] mr-3  mt-[5px] a-right-p-img "
              onClick={openModal} />
              <span className="ann-info-tooltiptext">view</span>
              </div>
              </div>
              </div>
             
            <div className="flex px-[20px] items-center justify-between gap-5">
              <div style={{display:"flex", gap:"10px", paddingLeft:"25px"}}>
                <p className="text-[13px] font-normal">Valid:</p>
                <p className="text-[13px] text-[#4A55A2]  font-[500] a-right-p">
                Jun 15
              </p>
              </div>
            <div className="edit-trash-container">
            <div style={{display:"flex", gap:"10px",marginRight:"2rem"}}>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
            </div>

            </div>
          </div>
          <div className="w-[450px] h-[180px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#9ac9f5] rounded-t-[7px] flex items-center justify-center announce-box-title">
              <h2 className="text-white text-[17px] font-[600]">20% off for 30 min consultant</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] justify-between inner-a-box">
              <div className='flex items-center gap-3 second-a-box'>
              <img src={radio} alt="radio" className="w-[12px] h-[12px] mb-[20px]" />
              <p className="text-[15px] a-left-p">Get a 20% discount on a one-hour consultation between June 15 and June 16.</p>
              <div>
              <img src={info} alt="right" className="w-[16px] h-[16px] mr-3  mt-[5px] a-right-p-img "
              onClick={openModal} />
              <span className="ann-info-tooltiptext">view</span>
              </div>
              </div>
              </div>
             
            <div className="flex px-[20px] items-center justify-between gap-5">
              <div style={{display:"flex", gap:"10px", paddingLeft:"25px"}}>
                <p className="text-[13px] font-normal">Valid:</p>
                <p className="text-[13px] text-[#4A55A2]  font-[500] a-right-p">
                Jun 15
              </p>
              </div>
             <div className="edit-trash-container">
            <div style={{display:"flex", gap:"10px",marginRight:"2rem"}}>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
            </div>
            
            </div>
          </div>
          <div className="w-[450px] h-[180px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#9ac9f5] rounded-t-[7px] flex items-center justify-center announce-box-title">
              <h2 className="text-white text-[17px] font-[600]">20% off for 30 min consultant</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] justify-between inner-a-box">
              <div className='flex items-center gap-3 second-a-box'>
              <img src={radio} alt="radio" className="w-[12px] h-[12px] mb-[20px]" />
              <p className="text-[15px] a-left-p">Get a 20% discount on a one-hour consultation between June 15 and June 16.</p>
              <div>
              <img src={info} alt="right" className="w-[16px] h-[16px] mr-3  mt-[5px] a-right-p-img "
              onClick={openModal} />
              <span className="ann-info-tooltiptext">view</span>
              </div>
              </div>
              </div>
             
            <div className="flex px-[20px] items-center justify-between gap-5">
              <div style={{display:"flex", gap:"10px", paddingLeft:"25px"}}>
                <p className="text-[13px] font-normal">Valid:</p>
                <p className="text-[13px] text-[#4A55A2]  font-[500] a-right-p">
                Jun 15
              </p>
              </div>
            <div className="edit-trash-container">
            <div style={{display:"flex", gap:"10px",marginRight:"2rem"}}>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
            </div>
            
            </div>
          </div>
          <div className="w-[450px] h-[180px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#9ac9f5] rounded-t-[7px] flex items-center justify-center announce-box-title">
              <h2 className="text-white text-[17px] font-[600]">20% off for 30 min consultant</h2>
            </div>
            <div className=" flex w-full px-4 py-[17px] justify-between inner-a-box">
              <div className='flex items-center gap-3 second-a-box'>
              <img src={radio} alt="radio" className="w-[12px] h-[12px] mb-[20px]" />
              <p className="text-[15px] a-left-p">Get a 20% discount on a one-hour consultation between June 15 and June 16.</p>
              <div>
              <img src={info} alt="right" className="w-[16px] h-[16px] mr-3  mt-[5px] a-right-p-img "
              onClick={openModal} />
              <span className="ann-info-tooltiptext">view</span>
              </div>
              </div>
              </div>
             
            <div className="flex px-[20px] items-center justify-between gap-5">
              <div style={{display:"flex", gap:"10px", paddingLeft:"25px"}}>
                <p className="text-[13px] font-normal">Valid:</p>
                <p className="text-[13px] text-[#4A55A2]  font-[500] a-right-p">
                Jun 15
              </p>
              </div>
            <div className="edit-trash-container">
            <div style={{display:"flex", gap:"10px",marginRight:"2rem"}}>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
            </div>
            
            </div>
          </div>
        </div>
      
  
  )
}

export default Annouce
