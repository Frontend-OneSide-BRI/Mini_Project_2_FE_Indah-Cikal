import React,{useState} from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Modal from "../Modal/Modal";

const ImgCard = ({ item }) => {
   const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="container-card hover:cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div
          className="rounded-custom flex flex-col justify-center px-5 py-10 h-[300px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${item.src})` }}
        ></div>
        <div className="overlay text-center">
          <div className="text text-white-bone">
            <h3 className="text-2xl text-bold">{item.title}</h3>
            <p className="flex">
              Learn more <BsArrowRightShort className="text-2xl icon" />
            </p>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={()=>setShowModal(false)} item={item}/>
    </>
  );
};

export default ImgCard;
