import React from "react";
import Link from "./Link";
import links from "../data/shareLinks";

export default function ShareList() {
  return (
    <div>
      <h3 className="mb-1">Share</h3>
      <div className="flex flex-col gap-2">
        {links.map((item) => (
          <Link
            titleAlign="text-center"
            key={item.title}
            title={item.title}
            link={item.link}
            icon={item.icon}
            iconWeight={item.iconWeight}
            iconSize="16"
            iconBoxStyle={`h-6 ${item.color} ${item.bg}`}
            boxStyle="p-2 hover:bg-neutral-100 border border-neutral-30 rounded transition-all"
            titleStyle="text-start"
          />
        ))}
      </div>
    </div>
  );
}
