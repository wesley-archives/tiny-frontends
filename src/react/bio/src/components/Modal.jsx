import React from "react";
import { X } from "@phosphor-icons/react";

export default function Modal({ title, content, isOpen, toggleModal }) {
  if (isOpen) {
    return (
      <div className="modal z-10 bg-zinc-900 text-zinc-950 bg-opacity-50 w-screen h-screen absolute top-0 left-0">
        <div className="container mx-auto p-6 flex justify-center items-center h-full">
          <div className="bg-white flex flex-col gap-6 w-96 rounded-md p-4">
            <div className="w-full flex justify-center items-center relative">
              <span className="text-lg">{title}</span>
              <button className="w-fit aspect-square rounded p-1 hover:bg-slate-200 absolute right-0 top-auto">
                <X
                  size={20}
                  className="text-black block"
                  onClick={toggleModal}
                />
              </button>
            </div>

            <div>{content}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
