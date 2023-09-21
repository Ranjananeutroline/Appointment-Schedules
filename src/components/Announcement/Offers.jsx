import React, { useState, useContext, useEffect, useRef } from "react";
import radio from "../../assets/radio1.png";
import right from "../../assets/right.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import OfferModal from "./OfferModal";
import edit from "../../assets/edit2.png";
import trash from "../../assets/trash2.png";
import info from "../../assets/info.svg";
import AddOffersModal from "./AddOffersModal";
import { AppContext } from "../../AppContext";
import { BsThreeDotsVertical } from 'react-icons/bs';
import "./OfferPage.css";

const Offers = () => {
  const { formDataFromModal } = useContext(AppContext);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => setModalOpen(false);
  const [getformData, setGetformData] = useState(null);

  const [showETVContainers, setShowETVContainers] = useState({});
  const [hideViewButton, setHideViewButton] = useState({});

  const toggleETVContainer = (index) => {
    // Check if the tooltip for this index is currently open
    if (showETVContainers[index]) {
      // If open, close it by resetting the state for this index
      setShowETVContainers((prev) => ({
        ...prev,
        [index]: false,
      }));
      // Also, show the "viewoff-btn" again
      setHideViewButton((prev) => ({
        ...prev,
        [index]: false,
      }));
    } else {
      // If closed, open it by setting the state for this index
      setShowETVContainers((prev) => ({
        ...prev,
        [index]: true,
      }));
      // Hide the "viewoff-btn" when the tooltip is open
      setHideViewButton((prev) => ({
        ...prev,
        [index]: true,
      }));
    }
  };
    

  const initialFormData = {
    title: "",
    message: "",
    description: "",
    from: "",
    to: "",
  };
  const offersData = [
    {
      title: "20% off for 30 min consultant",
      message: "Get a 20% discount on a one-hour consultation between June 15 and June 16.",
      description: "Valid",
      from: "June 15",
      to: "June 16",
    },
    {
      title: "10% off for 1 hour consultant",
      message: "Get a 20% discount on a one-hour consultation between June 20 and June 25.",
      description: "Valid",
      from: "June 15",
      to: "June 16",
    },
    
    // Add more offers as needed
  ];
  useEffect(() => {
    console.log(formDataFromModal);
  }, [formDataFromModal]);

  return (
    <div className=" flex flex-wrap gap-8 offer-details">
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
        <OfferModal
          setGetformData={setGetformData || initialFormData}
          closeModal={onCloseModal}
        />
      </Modal>

      {formDataFromModal.map((offer, index) => (
        <div key={index} className="w-[450px] h-[180px] rounded-[7px] bg-white offer-box">
          <div className="w-[450px] h-[50px] bg-[#a5c7cd] rounded-t-[7px] flex items-center justify-center offer-box-title">
            <h2 className="text-white text-[17px] font-[600]">{offer.title}</h2>
          </div>
          <div className="flex w-full px-4 py-[17px] gap-3  items-center  second-div-offer">
            <img src={radio} alt="radio" className="w-[12x] h-[12px] mb-[20px]" />
            <p className="text-[15px]  w-[350px] left-p">{offer.message}</p>
            {/* <p className="text-[12px] text-[#4A55A2] ml-[20px] font-[500]  w-[250px] right-p">
              {offer.from} - {offer.to}
            </p> */}
            <div className="offinfo-div">
            <img
              src={info}
              alt="right"
              className="w-[15px] h-[18px] right-p-img mt-[8px] offer-info-img"
              onClick={() => openModal(offer)}
            />
            <span className="off-info-tooltiptext">view</span>

           
            </div>

            
          </div>

          
          <div className="flex px-4 items-center justify-between inner-bottom-div">
            <div style={{display:"flex", gap:"10px", paddingLeft:"25px", width:"70%"}}>
            <p className="text-[13px] font-normal">{offer.description}:</p>
            <p className="text-[13px] text-[#4A55A2] font-[500]  w-[250px]  right-p">
              {offer.from} - {offer.to}
            </p>
            </div>
            <div className="edit-trash-container">
            <div className="flex  items-center justify-end  offer-edit-r">
              <div className="flex gap-3">
                <img src={edit} alt="edit" className="w-[15px] h-[15px]" />
                <img src={trash} alt="trash" className="w-[14px] h-[16px]" />
              </div>
            </div>
            </div>
            
            {/* <div className="viewoff-btn-container">
              {!hideViewButton[index] && (
                <button className="viewoff-btn" onClick={() => toggleETVContainer(index)}>
                  <TbDots/>
                </button>
              )}
              {showETVContainers[index] && (
                <div className="etv-container">
                  
                  <img src={edit} alt="edit" className="w-[15px] h-[15px]" />
                  <img src={trash} alt="trash" className="w-[14px] h-[16px]" />
                  <img
                    src={info}
                    alt="right"
                    className="w-[15px] h-[18px] right-p-img offer-info-img"
                    onClick={() => openModal(offer)}
                  />
                </div>
              )}
            </div> */}
            
          </div>

          <div className="tooltip-container">
            <div className="viewoff-btn-container">
              {!hideViewButton[index] && (
                <button className="viewoff-btn" onClick={() => toggleETVContainer(index)}>
                  <BsThreeDotsVertical />
                </button>
              )}
            </div>
            {showETVContainers[index] && (
            <div className="tooltip-inner">
              {/* Contents of the tooltip */}
              <img src={edit} alt="edit" className="w-[15px] h-[15px]" />
              <img src={trash} alt="trash" className="w-[14px] h-[16px]" />
              <img
                src={info}
                alt="right"
                className="w-[15px] h-[18px] right-p-img offer-info-img"
                onClick={() => openModal(offer)}
              />
            </div>
            )}
            </div>


        </div>
      ))}
      {/* {formDataFromModal !== null ? (
        formDataFromModal.map((offer, index) => (
          <div
            key={index}
            className="w-[450px] h-[145px] rounded-[7px] bg-white"
          >
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">
                {offer.title}
              </h2>
            </div>
            <div className="flex w-full px-4 py-[17px] gap-4 items-center ">
              <img src={radio} alt="radio" className="w-[12x] h-[12px]" />
              <p className="text-[16px]">{offer.message}</p>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                {offer.from} - {offer.to}
              </p>
              <img
                src={info}
                alt="right"
                className="w-[15px] h-[18px]"
                onClick={() => openModal(offer)}
              />
            </div>
            <div className="flex px-4 items-center justify-between">
              <p className="text-[13.2px] text-[#6A5F5F]">
                {offer.description}
              </p>

              <div className="flex px-4 items-center justify-end gap-3 pr-5">
                <p className="text-[13.2px] text-[#6A5F5F]">20 views</p>
                <div className="flex gap-1">
                  <img src={edit} alt="edit" className="w-[15px] h-[15px]" />
                  <img src={trash} alt="trash" className="w-[14px] h-[16px]" />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No offers to display.</p>
      )} */}
    </div>
  );
};

export default Offers;