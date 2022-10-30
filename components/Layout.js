import React, { useState } from "react";
import Cards from "./Cards";
import Modal from "react-modal";
import ReactPlayer from "react-player/youtube";

const Layout = ({ title, url, copyright, desc, mediaType, thumbnail }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-black">
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
      <div className="container mx-auto px-5 ">
        {/* SPOTLIGHT IMAGE */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-10 lg:mt-16">
          <div className="lg:w-6/12 flex flex-col text-center items-center lg:items-start lg:text-left">
            <h2>{title}</h2>
            <p className="line-clamp-3">{desc}</p>
            <h5>© {copyright}</h5>
            <button>Explore More</button>
          </div>
          {mediaType === "image" ? (
            <img
              onClick={toggleModal}
              src={url}
              alt="space"
              loading="lazy"
              className="rounded-md w-[300px] lg:w-[600px]"
            />
          ) : (
            <img
              onClick={toggleModal}
              src={thumbnail}
              alt="space"
              loading="lazy"
              className="rounded-md w-[300px] lg:w-[600px]"
            />
          )}
        </div>
        <div className="flex flex-col items-center mt-20 text-center lg:mt-32">
          <h1>The Future of Space Exploration</h1>
          <p>
            Thanks to cutting edge technology, the space has never been this
            close.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
