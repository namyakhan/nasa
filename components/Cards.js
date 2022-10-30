import React, { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player/youtube";

const Cards = ({ title, url, copyright, mediaType, thumbnail }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-black">
      <div className="container mx-auto px-5">
        {/* Modal */}
        {mediaType === "image" ? (
          <Modal
            style={{
              overlay: {
                backgroundColor: "#1e1e1e",
              },
              content: {
                background: "#ff",
              },
            }}
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
          >
            <img
              onClick={toggleModal}
              src={url}
              alt="logo"
              loading="lazy"
              className="w-full h-full z-[100] "
            />
          </Modal>
        ) : (
          <Modal
            style={{
              overlay: {
                backgroundColor: "#1e1e1e",
              },
              content: {
                background: "#ff",
              },
            }}
            onClick={toggleModal}
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
          >
            <div className="flex flex-col items-center justify-center pt-32">
              <ReactPlayer className="" url={url} />
              <button onClick={toggleModal}>Close Video</button>
            </div>
          </Modal>
        )}

        <div className="rectangle w-[200px] h-[330px] lg:w-[330px] lg:h-[450px] mt-10 lg:mt-16">
          {/* Image Vs Video */}

          {mediaType === "image" ? (
            <img
              onClick={toggleModal}
              src={url}
              alt="space"
              loading="lazy"
              className="rounded-md w-[200px] h-[200px] lg:w-[330px] lg:h-[300px]"
            />
          ) : (
            <img
              onClick={toggleModal}
              src={thumbnail}
              alt="space"
              loading="lazy"
              className="rounded-md w-[200px] h-[200px] lg:w-[330px] lg:h-[300px]"
            />
          )}

          <div className="p-2 lg:p-5">
            <h2 className="font-[600] text-[12px] md:text-[16px] lg:text-[20px]">
              {title}
            </h2>
            <h5 className="mt-1">{copyright}</h5>
            <h6 className="mt-1">24 April 2022</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
