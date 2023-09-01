import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal"
import AddOffersModal from "./AddOffersModal";
import "./offermodal.css";
import "./OfferPage.css";
import Offers from "./Offers";
import Annouce from "./Annouce";
import Expired from "./Expired";
import AddAnnouncementForm from "../AddAnnouncementForm";
import { AppProvider } from "../../AppContext";

const OfferPage = () => {
  const [activeTab, setActiveTab] = useState("offers");
  // const [portal, setPortal] = useState(true);

  // const togglePortal = () => {
  //   setPortal(!portal);
  // };

  // const childData = (data) => {
  //   setPortal(data);
  // };
  const[addModalType,setAddModalType]=useState("");

  const [modalOpen, setModalOpen] = useState(false);
  // const [addmodalOpen, setAddModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const onCloseModal = () => setModalOpen(false);

  // const closeAddModal = () => {
  //   setAddModalOpen(false);
  // };
  // function closeAddOffer() {
  //   setAddModalOpen(false);
  // }
  const openModal = (type) => {
    setAddModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setAddModalType("");
  };

  return (
    <AppProvider>
      <div className="offer-main">
        <Modal
          open={modalOpen}
          onClose={closeModal}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
            closeButton:"customButton2"
          }}
        >
          {addModalType === "announcement" && <AddAnnouncementForm />}
        {addModalType === "offers" && <AddOffersModal />}
        </Modal>
        <div className="items-center w-full title-div">
          <h1 className="text-[27px] text-[#3F26A5] ">Announcement</h1>

          
        </div>

        <div className="flex select-offer-main">
          <button
            className={`border-r offer-select${
              activeTab === "offers"
                ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
                : ""
            } h-[50px] w-[100px]`}
            style={
              activeTab === "offers"
                ? {
                    color: "#346AFF",
                    borderWidth: "0.5px",
                    boxShadow: "0px 2px 5px 0px #D2F3FA",
                    
                  }
                : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
            }
            onClick={() => setActiveTab("offers")}
          >
            Offers
          </button>

          <button
            className={`border-r offer-select${
              activeTab === "announcement"
                ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
                : ""
            } h-[50px] w-[150px]`}
            style={
              activeTab === "announcement"
                ? {
                    borderWidth: "0.5px",
                    boxShadow: "0px 2px 5px 0px #D2F3FA",
                  }
                : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
            }
            onClick={() => setActiveTab("announcement")}
          >
            Announcement
          </button>
          <button
            className={`border-r offer-select${
              activeTab === "expired"
                ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
                : ""
            } h-[50px] w-[100px]`}
            style={
              activeTab === "expired"
                ? {
                    borderWidth: "0.5px",
                    boxShadow: "0px 2px 5px 0px #D2F3FA",
                    
                  }
                : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
            }
            onClick={() => setActiveTab("expired")}
          >
            Expired
          </button>
        </div>

        <div className="addoffer-div">
        {activeTab === "announcement" || activeTab === "offers" ? (
            <button
              className="flex items-center justify-center gap-2  p-3 text-center text-[#5B76FC] text-inter text-[16px] font-[600] rounded-[6px] bg-[#fbfbfb] shadow-shado2 hover:text-[#4d61ba] hover:bg-[#fdfdfd]
  "
              onClick={() =>
                activeTab === "announcement"
                  ? openModal("announcement")
                  : openModal("offers")
              }
            >
              {activeTab === "announcement"
                ? "+ Add Announcement"
                : "+ Add Offers"}
            </button>
          ) : null}
        </div>

        <div className="mt-[12px] flex flex-wrap gap-8">
          <div>
            {activeTab === "offers" && <Offers />}
            {activeTab === "announcement" && <Annouce />}
            {activeTab === "expired" && <Expired />}
          </div>
        </div>
      </div>

      
    </AppProvider>
  );
};

export default OfferPage;
