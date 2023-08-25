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
  
          <div className=" flex flex-wrap gap-8">
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
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Holiday</h2>
            </div>
            <div className=" flex w-full  px-8 py-[17px] justify-between ">
              <div className='flex items-center gap-4'>
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              </div>
              
             
              <div  className='flex items-center gap-4'>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15
              </p>
              <img src={info} alt="right" className="w-[16px] h-[16px]"onClick={openModal} />
              </div>
              </div>
             
            
            <div className="flex px-[32px] items-center justify-end gap-1">
             
             <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
          </div>
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Holiday</h2>
            </div>
            <div className=" flex w-full  px-8 py-[17px] justify-between ">
              <div className='flex items-center gap-4'>
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              </div>
              
             
              <div  className='flex items-center gap-4'>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15
              </p>
              <img src={info} alt="right" className="w-[16px] h-[16px]"onClick={openModal} />              </div>
              </div>
              <div className="flex px-[32px] items-center justify-end gap-1">
             
             <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
          </div>
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Holiday</h2>
            </div>
            <div className=" flex w-full  px-8 py-[17px] justify-between ">
              <div className='flex items-center gap-4'>
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              </div>
              
             
              <div  className='flex items-center gap-4'>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15
              </p>
              <img src={info} alt="right" className="w-[16px] h-[16px]"onClick={openModal} />
              </div>
              </div>
              <div className="flex px-[32px] items-center justify-end gap-1">
             
             <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
          </div>
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Holiday</h2>
            </div>
            <div className=" flex w-full  px-8 py-[17px] justify-between ">
              <div className='flex items-center gap-4'>
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              </div>
              
             
              <div  className='flex items-center gap-4'>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15
              </p>
              <img src={info} alt="right" className="w-[16px] h-[16px]"onClick={openModal} />
              </div>
              </div>
              <div className="flex px-[32px] items-center justify-end gap-1">
             
             <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
          </div>
        </div>
      
  
  )
}

export default Annouce
