import React, { useState, useEffect } from "react";
import radio from "../images/radio1.png";
import right from "../images/right.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import edit from "../images/edit1.png";
import trash from "../images/trash1.png";
import AnnounceModal from "./AnnounceModal";
import "./announcemodal.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnnouncementByIDHere, getAllAnnouncementsHere } from "../../redux/actions/announcementAction";

const Annouce = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAnnouncementsHere());
  }, [dispatch]);
  const announcements = useSelector((state) => state.announcement.announcement);
  console.log(announcements);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setModalOpen(false);
  };
  const handleDeleteAnnouncement = (id) => {
    console.log(id);
    dispatch(deleteAnnouncementByIDHere(id))

  };

  return (
    <div className=" flex flex-wrap gap-8">
      {announcements.map((announcement) => (
        <div>
          <Modal
            open={modalOpen}
            onClose={onCloseModal}
            center
            classNames={{
              // overlay: "customOverlay",
              modal: "customModal",
            }}
          >
            {modalOpen && (
              <AnnounceModal
                onCloseModal={onCloseModal}
                announcement={announcement}
              />
            )}
          </Modal>

          <div className="w-[100%] sm:w-[450px] md:h-[145px] rounded-[7px] bg-white">
            <div className="w-[100%] sm:w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Holiday</h2>
            </div>
            <div className=" flex w-full px-2 md:px-8 py-[17px] justify-between ">
              <div className="flex items-center gap-4">
                <img
                  src={radio}
                  alt="radio"
                  className="w-[12x] h-[12px] -mt-1"
                />
                <p className="text-[12px] md:text-[16px]">
                  {announcement.title}
                </p>
              </div>

              <div
                className="flex items-center gap-0 md:gap-1 cursor-pointer"
                onClick={openModal}
              >
                <p className="text-[10px] md:text-[14px] text-[#4A55A2] ml-[10px] font-[500] min-w-[50px]">
                  {announcement.validity}
                </p>
                <img src={right} alt="right" className="w-[15px] h-[18px]" />
              </div>
            </div>

            <div className="flex mb-3 px-4 items-center justify-end gap-2">
              <img src={edit} alt="edit" />
              <img
                src={trash}
                alt="trash"
                onClick={()=>handleDeleteAnnouncement(announcement._id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Annouce;
