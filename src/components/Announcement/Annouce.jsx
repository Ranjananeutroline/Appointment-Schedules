import React, {useState, useContext, useEffect, useRef} from 'react'
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
import { BsThreeDotsVertical } from 'react-icons/bs';

const Annouce = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
      setModalOpen(true);
    };
    const onCloseModal = () => setModalOpen(false);

    const [showETVContainers, setShowETVContainers] = useState({});
    const [hideViewButton, setHideViewButton] = useState({});
  
    const toggleETVContainer = (index) => {
      setShowETVContainers((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    
      setHideViewButton((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
    
    const etvContainerRef = useRef(null);
    useEffect(() => {
    function handleClickOutside(event) {
      if (etvContainerRef.current && !etvContainerRef.current.contains(event.target)) {
        // Clicked outside the etv-container, so close it and show viewoff-btn
        setShowETVContainers({});
        setHideViewButton({});
      }
    }
  
    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
  
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

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
        {Array.from({ length: 4 }, (_, index) => (
          <div  key={index} className="w-[450px] h-[180px] rounded-[7px] bg-white announce-box">
            <div className="w-[450px] h-[50px] bg-[#9ac9f5] rounded-t-[7px] flex items-center justify-center announce-box-title">
              <h2 className="text-white text-[17px] font-[600]">20% off for 30 min consultant</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] justify-between inner-a-box">
              <div className='flex items-center gap-3 second-a-box'>
              <img src={radio} alt="radio" className="w-[12px] h-[12px] mb-[20px]" />
              <p className="text-[15px] a-left-p">Get a 20% discount on a one-hour consultation between June 15 and June 16.</p>
              <div className='anninfo-div'>
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
            <div style={{display:"flex", gap:"10px",marginRight:"0.8rem"}}>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
            </div>
            </div>

            
            </div>

            <div className="viewoff-btn-container">
              {!hideViewButton[index] && (
                <button className="viewoff-btn" onClick={() => toggleETVContainer(index)}>
                <BsThreeDotsVertical/>
                
                </button>
              )}
              {showETVContainers[index] && (
                <div ref={etvContainerRef} className="etv-container">
                  {/* Contents of etv-container */}
                  <img
                    src={info}
                    alt="right"
                    className="w-[15px] h-[18px] right-p-img offer-info-img"
                    onClick={openModal}
                  />
                  <img src={edit} alt="edit" className="w-[15px] h-[15px]" />
                  <img src={trash} alt="trash" className="w-[14px] h-[16px]" />
                </div>
              )}
            </div>
           


          </div>
          ))}
         
         
         

          
        </div>
      
  
  )
}

export default Annouce
