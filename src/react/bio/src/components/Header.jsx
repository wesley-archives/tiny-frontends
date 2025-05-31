import React, { useState } from "react";
import { DotsThree, SealCheck } from "@phosphor-icons/react";
import user from "./User";
import Modal from "./Modal";
import Menu from "./Menu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleModal() {
    setOpenMenu(!openMenu);
  }

  return (
    <header>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center p-2 rounded-full bg-white text-zinc-950 backdrop-blur-md border">
          <div>
            <figure>
              <img
                src={`https://github.com/${user.username}.png`}
                alt={`Avatar of ${user.name}`}
                className="h-12 w-auto object-cover rounded-full"
              />
            </figure>
          </div>

          <div className="flex gap-2 items-center theme-color">
            <span>
              {"@"}
              {user.name}
            </span>
            <SealCheck size={24} weight="fill" className="text-sky-500" />
          </div>
          <div>
            <button
              className="p-2 bg-zinc-900 shadow-sm rounded-full hover:shadow-2xl transition-all"
              onClick={toggleModal}
            >
              <DotsThree size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <Modal
        title="Menu"
        content={<Menu />}
        isOpen={openMenu}
        toggleModal={toggleModal}
      />
    </header>
  );
}
