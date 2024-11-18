"use client";

import { usePathname } from "next/navigation";
import { Tab } from "./Tab";
import { container } from "./NavigationLeft.css";

export type NavigationLeftProps = {};

export const NavigationLeft = (props: NavigationLeftProps) => {
  const pathname = usePathname();

  return (
    <div className={container}>
      {[
        {
          href: "/mypage",
          text: "방문한 장소",
        },
        {
          href: "/mypage/bookmark",
          text: "찜한 장소",
        },
      ].map(({ href, text }, key) => (
        <Tab key={key} href={href} selected={pathname === href} text={text} />
      ))}
    </div>
  );
};
