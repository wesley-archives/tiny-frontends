import React from "react";
import Link from "./Link";
import links from "../data/mainLinks";

export default function LinkList() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 p-2">
        {links.map((item) => (
          <Link
            key={item.title}
            title={item.title}
            link={item.link}
            icon={item.icon}
            iconWeight="fill"
            iconSize="24"
            iconBoxStyle={`h-12 ${item.color} ${item.bg}`}
            boxStyle="bg-white p-1 shadow hover:scale-105"
            titleStyle="text-center"
          />
        ))}
      </div>
    </section>
  );
}
