import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Link(props) {
  const IconComponent = props.icon;
  return (
    <div className={`${props.boxStyle} rounded text-zinc-950 transition-all`}>
      <a
        href={props.link}
        className={`${props.linkStyle} flex gap-4 justify-between items-center`}
        target="_blank"
        rel="noreferrer"
      >
        <span
          className={`${props.iconBoxStyle} flex justify-center items-center rounded aspect-square`}
        >
          <IconComponent
            size={props.iconSize}
            weight={props.iconWeight}
            className={`${props.iconStyle}`}
          />
          <img
            src={props.imgUrl}
            alt={props.imgAlt}
            className={`${props.imgStyle}`}
          />
        </span>

        <span className={`${props.titleStyle} flex-1`}>{props.title}</span>

        <span>
          <ArrowUpRight size={24} className="mr-1" />
        </span>
      </a>
    </div>
  );
}
