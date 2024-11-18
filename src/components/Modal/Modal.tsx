"use client";

import { useRouter } from "next/navigation";
import {
  background,
  container,
  topContainer,
  titleContainer,
  contentContainer,
} from "./Modal.css";
import { typos } from "@/styles/typos.css";

export type ModalProps = {
  title: string | React.ReactNode;
  text?: string;
  children: React.ReactNode;
  button?: React.ReactNode;
};

export const Modal = (props: ModalProps) => {
  const router = useRouter();
  const { title, text, children, button } = props;
  return (
    <div className={background} onClick={() => router.back()}>
      <div className={container} onClick={(e) => e.stopPropagation()}>
        <div className={topContainer}>
          <span className={`${titleContainer} ${typos.subtitle}`}>{title}</span>
          <div className={contentContainer}>{children}</div>
        </div>
        {button}
      </div>
    </div>
  );
};
